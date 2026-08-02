import { useRef, useEffect } from 'react'
import { resume } from '../data/resume'
import { gsap, useGSAP, EASE, DURATION, STAGGER } from '../data/motion'
import './Hero.css'

export default function Hero() {
  const root = useRef(null)
  const videoRef = useRef(null)

  // 性能：首屏滚出视口 / 滚动进行中 时暂停视频与背景模糊动画，
  // 回屏且停手后自动恢复 —— 直接消除首屏滚动卡顿
  // 同时：浏览器可能静默拦截 muted autoplay，这里加一次用户交互 fallback，
  //       让用户首次点击/滚动/按键时再尝试播放一次
  useEffect(() => {
    const el = root.current
    const video = videoRef.current
    if (!el || !video) return

    let isVisible = true
    let scrollTimer = null
    let gestureAttached = false

    const tryPlay = () => {
      const p = video.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => attachGestureFallback())
      }
    }

    const onFirstGesture = () => {
      // 用户首次交互后重试一次，成功就摘掉监听
      const p = video.play()
      if (p && typeof p.then === 'function') {
        p.then(() => detachGestureFallback()).catch(() => {})
      } else {
        detachGestureFallback()
      }
    }

    const attachGestureFallback = () => {
      if (gestureAttached) return
      gestureAttached = true
      document.addEventListener('pointerdown', onFirstGesture, { passive: true })
      document.addEventListener('keydown', onFirstGesture, { passive: true })
      window.addEventListener('scroll', onFirstGesture, { passive: true })
    }

    const detachGestureFallback = () => {
      if (!gestureAttached) return
      gestureAttached = false
      document.removeEventListener('pointerdown', onFirstGesture)
      document.removeEventListener('keydown', onFirstGesture)
      window.removeEventListener('scroll', onFirstGesture)
    }

    // 是否应当播放：首屏可见 且 当前不在滚动中
    const sync = () => {
      if (!isVisible || el.classList.contains('is-scrolling')) {
        video.pause()
      } else {
        tryPlay()
      }
    }

    // 视频数据可用 / 缓冲足够时主动再 play 一次（避开 poster 残留）；
    // canplay/canplaythrough 在缓冲到可播时触发，让首屏可见即播，不必等用户点击
    const onLoaded = () => sync()
    const onReady = () => {
      if (isVisible && !el.classList.contains('is-scrolling')) tryPlay()
    }
    video.addEventListener('loadeddata', onLoaded)
    video.addEventListener('canplay', onReady)
    video.addEventListener('canplaythrough', onReady)

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && entry.intersectionRatio > 0.1
        el.classList.toggle('is-offscreen', !isVisible)
        sync()
      },
      { threshold: [0, 0.1, 0.5, 1] }
    )
    io.observe(el)

    // 滚动期间挂起视频解码与模糊动画；停手 160ms 后恢复
    const onScroll = () => {
      el.classList.add('is-scrolling')
      sync()
      if (scrollTimer) clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        el.classList.remove('is-scrolling')
        sync()
      }, 160)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      video.removeEventListener('loadeddata', onLoaded)
      video.removeEventListener('canplay', onReady)
      video.removeEventListener('canplaythrough', onReady)
      detachGestureFallback()
      if (scrollTimer) clearTimeout(scrollTimer)
    }
  }, [])

  useGSAP(() => {
    // useGSAP 自带 context + cleanup
    const tl = gsap.timeline({ defaults: { ease: EASE.smooth } })

    // 背景层叠入
    tl.from('.hero__bg-aurora', { opacity: 0, duration: DURATION.epic, ease: EASE.primary }, 0)
      .from('.hero__bg-fog', { opacity: 0, duration: DURATION.slow, ease: EASE.primary }, 0.2)
      .from('.hero__bg-noise', { opacity: 0, duration: DURATION.slow, ease: EASE.primary }, 0.3)
      .from('.hero__bg-vignette', { opacity: 0, duration: DURATION.epic, ease: EASE.primary }, 0.1)

    // 右上角海报小标题（两行右对齐，stagger）
    tl.set('.hero__poster-headline .reveal-line', { yPercent: 110 }, 0.4)
      .to('.hero__poster-headline .reveal-line', {
        yPercent: 0,
        duration: DURATION.slow,
        ease: EASE.smooth,
        stagger: STAGGER.base,
      }, 0.4)

    // 中部 manifesto 细长文字
    tl.set('.hero__manifesto .reveal-line', { yPercent: 120, opacity: 0.6 }, 0.7)
      .to('.hero__manifesto .reveal-line', {
        yPercent: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.smooth,
        stagger: STAGGER.base,
      }, 0.7)

    // === 超大英文标题强视觉进场 ===
    // LUO：mask reveal + scale 压缩归位
    tl.set('.hero__title-line', { yPercent: 130, scale: 1.12, transformOrigin: 'center bottom' }, 0.95)
      .to('.hero__title-line', {
        yPercent: 0,
        scale: 1,
        duration: DURATION.hero,
        ease: EASE.smooth,
        stagger: STAGGER.slow,
      }, 0.95)

    // 中文名小标签
    tl.from('.hero__cn-name', {
      y: 30,
      opacity: 0,
      duration: DURATION.slow,
      ease: EASE.primary,
    }, 1.6)

    // 底部两端信息 stagger
    tl.from('.hero__bottom-left > *', {
      y: 28,
      opacity: 0,
      duration: DURATION.base,
      stagger: STAGGER.fast,
      ease: EASE.primary,
    }, 2.0)
      .from('.hero__bottom-right > *', {
        y: 28,
        opacity: 0,
        duration: DURATION.base,
        stagger: STAGGER.fast,
        ease: EASE.primary,
      }, 2.1)

    // 流光（仅 accent 行）
    tl.call(() => {
      const accent = root.current.querySelector('.hero__title-line--accent')
      if (accent) accent.classList.add('shimmer-on')
    }, [], 2.2)
  }, { scope: root })

  return (
    <section id="top" className="hero" ref={root}>
      {/* 背景层：抽象暗色流动 + 视频 */}
      <div className="hero__bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero__video"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />
        <div className="hero__bg-aurora" />
        <div className="hero__bg-fog" />
        <div className="hero__bg-noise" />
        <div className="hero__bg-vignette" />
      </div>

      {/* 主体内容：居中构图 */}
      <div className="hero__content section">
        {/* 海报小标题（右上，content 内顶部，避开固定导航栏） */}
        <div className="hero__content-top">
          <div className="hero__poster-headline">
            <span className="reveal-mask">
              <span className="reveal-line">VISUAL</span>
            </span>
            <span className="reveal-mask">
              <span className="reveal-line">DESIGNER</span>
            </span>
          </div>
        </div>

        <div className="hero__center">
          <div className="hero__manifesto">
            <span className="reveal-mask">
              <span className="reveal-line">
                A VISUAL DESIGNER AND GAME DEVELOPER BASED IN DONGGUAN, CHINA.
              </span>
            </span>
            <span className="reveal-mask">
              <span className="reveal-line">
                SPECIALIZING IN BRAND IDENTITY, UI/UX, GAME PROTOTYPES AND DIGITAL ART,
              </span>
            </span>
            <span className="reveal-mask">
              <span className="reveal-line">
                CONVEYING IDEAS THROUGH COLOR, SHAPE, LAYOUT AND INTERACTION.
              </span>
            </span>
          </div>

          <h1 className="hero__title">
            <span className="reveal-mask hero__title-mask">
              <span className="reveal-line hero__title-line">LUO</span>
            </span>
            <span className="reveal-mask hero__title-mask">
              <span className="reveal-line hero__title-line hero__title-line--accent">LIJI</span>
            </span>
          </h1>

          <div className="hero__cn-name">
            <span className="hero__cn-name-line" />
            <span>{resume.name}</span>
          </div>
        </div>
      </div>

      {/* 底部信息：海报式两端布局 */}
      <div className="hero__bottom section">
        <div className="hero__bottom-left">
          <div className="hero__bottom-col">
            <span>视觉设计 / 游戏开发</span>
            <span>UI · GAME · BRANDING</span>
          </div>
          <div className="hero__bottom-divider" />
          <div className="hero__bottom-col">
            <span>BASED IN DONGGUAN</span>
            <span>2025 — 2026</span>
          </div>
        </div>

        <div className="hero__bottom-right">
          <span>SCROLL TO EXPLORE</span>
          <span>PORTFOLIO</span>
        </div>
      </div>
    </section>
  )
}
