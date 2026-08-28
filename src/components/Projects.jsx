import { useRef } from 'react'
import { resume } from '../data/resume'
import { gsap, useGSAP, EASE, DURATION, STAGGER, START } from '../data/motion'
import ProjectCover from './ProjectCover'
import './Projects.css'

/**
 * 项目视频：真正的懒加载。
 * preload="none" 且不在进入视口时主动 load() —— 浏览器只在用户点击播放控件时才下载视频，
 * 配合服务端 faststart（moov 在文件头）可边下边播。
 * 这样 19MB 的 slxws 视频绝不会在滚动到项目区时后台偷偷预下载、拖垮整页。
 */
function LazyVideo({ src, poster, label }) {
  return (
    <div className="project__detail project__detail--video">
      <video
        src={src}
        poster={poster}
        controls
        loop
        muted
        playsInline
        preload="none"
        aria-label={label}
      />
    </div>
  )
}

export default function Projects() {
  const root = useRef(null)

  useGSAP(() => {
    // useGSAP 自带 context + cleanup
    // 标题 mask reveal
    gsap.set('.projects__title .reveal-line', { yPercent: 110 })
    gsap.to('.projects__title .reveal-line', {
      yPercent: 0,
      duration: DURATION.slow,
      ease: EASE.smooth,
      stagger: STAGGER.base,
      scrollTrigger: { trigger: '.projects__header', start: START.near, once: true },
    })

    // eyebrow + intro
    gsap.fromTo('.projects__header .eyebrow',
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.base,
        ease: EASE.primary,
        scrollTrigger: { trigger: '.projects__header', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )
    gsap.fromTo('.projects__intro',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        scrollTrigger: { trigger: '.projects__header', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // 右侧大数字计数
    gsap.fromTo('.projects__count',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        scrollTrigger: { trigger: '.projects__header', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // 卡片 stagger（每个 project 从下大幅进场）
    gsap.fromTo('.project',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.epic,
        ease: EASE.primary,
        stagger: STAGGER.slow,
        scrollTrigger: { trigger: '.projects__list', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // 每个封面：reveal 进场
    const covers = root.current.querySelectorAll('.project__cover')
    covers.forEach((cover) => {
      const inner = cover.querySelector('.cover-inner') || cover.querySelector('svg') || cover.firstElementChild
      const isImage = inner && inner.tagName === 'IMG'

      if (isImage) {
        // 栅格 jpg 封面：绝不做 scale 缩放（会被放大模糊，且 lazy 图加载后
        // ScrollTrigger 位置错位易卡在放大态）。改用纯透明度淡入，始终 scale:1 保持清晰。
        gsap.set(inner, { opacity: 0 })
        gsap.to(inner, {
          opacity: 1,
          duration: DURATION.epic,
          ease: EASE.primary,
          scrollTrigger: {
            trigger: cover,
            start: 'top 85%',
            once: true,
            invalidateOnRefresh: true,
          },
        })
      } else {
        // SVG 矢量封面：缩放无模糊，保留缩放进场
        gsap.set(inner, { scale: 1.12, transformOrigin: 'center center' })
        gsap.to(inner, {
          scale: 1,
          duration: DURATION.epic,
          ease: EASE.primary,
          scrollTrigger: {
            trigger: cover,
            start: 'top 82%',
            once: true,
            invalidateOnRefresh: true,
          },
        })
      }
    })

    // view all
    gsap.from('.projects__viewall', {
      y: 40,
      opacity: 0,
      duration: DURATION.slow,
      ease: EASE.primary,
      scrollTrigger: { trigger: '.projects__viewall', start: START.near, once: true },
    })
  }, { scope: root })

  return (
    <section id="work" className="projects" ref={root}>
      <div className="projects__inner section">
        {/* 头部 */}
        <div className="projects__header">
          <div className="projects__header-left">
            <div className="eyebrow">
              <span>01</span>
              <span>/</span>
              <span>Selected Works</span>
            </div>
            <h2 className="projects__title">
              <span className="reveal-mask"><span className="reveal-line">FEATURED</span></span>
              <span className="reveal-mask"><span className="reveal-line projects__title-stroke">PROJECTS</span></span>
            </h2>
            <p className="projects__intro">
              从非遗视觉、游戏开发到实时场景美术，
              <br />
              每一个项目都是一次对「如何讲故事」的练习。
            </p>
          </div>

          <div className="projects__header-right">
            <div className="projects__count">
              <span className="projects__count-num">{String(resume.projects.length).padStart(2, '0')}</span>
              <span className="projects__count-label">SELECTED<br />PROJECTS</span>
            </div>
          </div>
        </div>

        {/* 列表 */}
        <div className="projects__list">
          {resume.projects.map((p) => (
            <article className="project" key={p.id}>
              <div className="project__index">
                <span className="mono">{p.num}</span>
                <span className="mono">/ 0{resume.projects.length}</span>
              </div>

              <div className="project__cover">
                <ProjectCover variant={p.cover} color={p.color} num={p.num} image={p.coverImage} />
                <div className="project__cover-overlay">
                  <span className="mono project__cover-year">{p.period}</span>
                </div>
              </div>

              <div className={`project__body ${p.detailGallery ? 'project__body--gallery' : ''}`}>
                <>
                  <div className="project__meta">
                    <span className="mono project__category">{p.category}</span>
                    <span className="mono project__period">{p.period}</span>
                  </div>

                  <h3 className="project__title">{p.title}</h3>

                  <div className="project__role-row">
                    <span className="mono project__role-label">ROLE</span>
                    <span className="project__role">{p.role}</span>
                  </div>

                  <p className="project__summary">{p.summary}</p>

                  {p.detailGallery ? (
                    <div className="project__gallery">
                      {p.detailGallery.map((img, i) => (
                        <div className="project__gallery-item" key={i}>
                          <img src={img} alt={`${p.title} 应用展示 ${i + 1}`} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  ) : p.detailImage ? (
                    <div className="project__detail">
                      <img src={p.detailImage} alt={`${p.title} 详情`} loading="lazy" />
                    </div>
                  ) : null}

                  {p.detailVideo && (
                    <LazyVideo
                      src={p.detailVideo}
                      poster={p.coverImage}
                      label={`${p.title} 实机漫游视频`}
                    />
                  )}

                  <div className="project__tags">
                    {p.tags.map((t, j) => (
                      <span className="project__tag" key={j}>
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
