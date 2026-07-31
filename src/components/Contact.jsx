import { useRef } from 'react'
import { resume } from '../data/resume'
import { gsap, useGSAP, EASE, DURATION, STAGGER, START } from '../data/motion'
import './Contact.css'

export default function Contact() {
  const root = useRef(null)

  useGSAP(() => {
    // useGSAP 自带 context + cleanup
    // 标题 mask reveal（3 行）
    gsap.set('.contact__title .reveal-line', { yPercent: 110 })
    gsap.to('.contact__title .reveal-line', {
      yPercent: 0,
      duration: DURATION.epic,
      ease: EASE.smooth,
      stagger: STAGGER.base,
      scrollTrigger: { trigger: '.contact__main', start: START.near, once: true },
    })

    // eyebrow
    gsap.fromTo('.contact__eyebrow',
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.base,
        ease: EASE.primary,
        scrollTrigger: { trigger: '.contact__main', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // lead 文字
    gsap.fromTo('.contact__lead',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        scrollTrigger: { trigger: '.contact__main', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // CTA（从下大幅进场 + 略宽缩放）
    gsap.fromTo('.contact__cta',
      { y: 80, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: DURATION.epic,
        ease: EASE.primary,
        scrollTrigger: { trigger: '.contact__actions', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // 信息卡 stagger
    gsap.fromTo('.contact__info-item',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        stagger: STAGGER.base,
        scrollTrigger: { trigger: '.contact__info', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // footer
    gsap.fromTo('.contact__footer > *',
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.base,
        ease: EASE.primary,
        stagger: STAGGER.fast,
        scrollTrigger: { trigger: '.contact__footer', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // marquee 推进（入场时启动）
    gsap.fromTo('.contact__marquee-track',
      { opacity: 0 },
      {
        opacity: 1,
        duration: DURATION.base,
        ease: EASE.primary,
        scrollTrigger: { trigger: '.contact__marquee', start: 'top 95%', once: true, invalidateOnRefresh: true },
      }
    )
  }, { scope: root })

  return (
    <section id="contact" className="contact" ref={root}>
      {/* 背景 */}
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__bg-mesh" />
        <div className="contact__bg-noise" />
        <div className="contact__bg-grid" />
      </div>

      <div className="contact__inner section">
        {/* marquee */}
        <div className="contact__marquee" aria-hidden="true">
          <div className="contact__marquee-track">
            {[...Array(2)].map((_, i) => (
              <span className="contact__marquee-text" key={i}>
                LET&apos;S BUILD SOMETHING &nbsp;·&nbsp; LET&apos;S BUILD SOMETHING &nbsp;·&nbsp;
                LET&apos;S BUILD SOMETHING &nbsp;·&nbsp; LET&apos;S BUILD SOMETHING &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* 主体 */}
        <div className="contact__main">
          <div className="contact__eyebrow mono">
            <span>05</span>
            <span>/</span>
            <span>Get In Touch</span>
          </div>

          <h2 className="contact__title">
            <span className="reveal-mask"><span className="reveal-line">HAVE A</span></span>
            <span className="reveal-mask"><span className="reveal-line contact__title-line--stroke">PROJECT</span></span>
            <span className="reveal-mask"><span className="reveal-line">IN MIND?</span></span>
          </h2>

          <p className="contact__lead">
            无论是品牌视觉、游戏开发，还是任何想让脑海中的画面成真的项目，
            <br />
            欢迎随时联系。
          </p>

          <div className="contact__actions">
            <a href={`mailto:${resume.email}`} className="contact__cta">
              <span className="contact__cta-text">
                <span className="mono contact__cta-label">START A CONVERSATION</span>
                <span className="contact__cta-value">{resume.email}</span>
              </span>
              <span className="contact__cta-arrow">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M2 30L30 2M30 2H8M30 2V24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* 信息 */}
        <div className="contact__info">
          {resume.socials.map((s, i) => (
            <a
              href={s.href}
              key={i}
              className="contact__info-item"
              {...(s.href === '#' ? { onClick: (e) => e.preventDefault() } : {})}
            >
              <span className="mono contact__info-label">
                /{String(i + 1).padStart(2, '0')} · {s.label}
              </span>
              <span className="contact__info-value">{s.value}</span>
              <span className="contact__info-arrow">↗</span>
            </a>
          ))}
        </div>

        {/* footer */}
        <footer className="contact__footer">
          <div className="contact__footer-left">
            <span className="contact__footer-mark">L</span>
            <div>
              <span className="contact__footer-name">{resume.nameEn}</span>
              <span className="mono contact__footer-role">{resume.roleEn}</span>
            </div>
          </div>

          <div className="contact__footer-center mono">
            <span>© 2026 LUO LIJI</span>
            <span>·</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="contact__footer-right mono">
            <span>BUILT WITH REACT + VITE</span>
            <span>·</span>
            <span>DONG GUAN · CN</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
