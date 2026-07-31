import { useRef } from 'react'
import { resume } from '../data/resume'
import { gsap, useGSAP, EASE, DURATION, STAGGER, START } from '../data/motion'
import Avatar from './Avatar'
import './About.css'

export default function About() {
  const root = useRef(null)

  useGSAP(() => {
    // useGSAP 自带 context + cleanup
    // 标题 mask reveal（每行 .reveal-line 从 110% 推到 0）
    gsap.set('.about__title .reveal-line', { yPercent: 110 })
    gsap.to('.about__title .reveal-line', {
      yPercent: 0,
      duration: DURATION.slow,
      ease: EASE.smooth,
      stagger: STAGGER.base,
      scrollTrigger: { trigger: '.about__header', start: START.near, once: true },
    })

    // eyebrow
    gsap.from('.about__header .eyebrow', {
      y: 24,
      opacity: 0,
      duration: DURATION.base,
      ease: EASE.primary,
      scrollTrigger: { trigger: '.about__header', start: START.near, once: true },
    })

    // 左侧头像 + 信息（滑入）
    gsap.fromTo('.about__left > *',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        stagger: STAGGER.base,
        scrollTrigger: { trigger: '.about__grid', start: START.mid, once: true, invalidateOnRefresh: true },
      }
    )

    // 右侧 bio 文字块
    gsap.fromTo('.about__bio > *',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        stagger: STAGGER.base,
        scrollTrigger: { trigger: '.about__bio', start: START.mid, once: true, invalidateOnRefresh: true },
      }
    )

    // stats 数字大幅进场
    gsap.fromTo('.about__stat',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        stagger: STAGGER.fast,
        scrollTrigger: { trigger: '.about__stats', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // 课程标签 stagger
    gsap.fromTo('.about__course',
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.base,
        ease: EASE.primary,
        stagger: STAGGER.tight,
        scrollTrigger: { trigger: '.about__courses', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // courses label
    gsap.fromTo('.about__courses-label',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.base,
        ease: EASE.primary,
        scrollTrigger: { trigger: '.about__courses', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )
  }, { scope: root })

  return (
    <section id="about" className="about" ref={root}>
      <div className="about__inner section">
        {/* 头部 */}
        <div className="about__header">
          <div className="eyebrow">
            <span>02</span>
            <span>/</span>
            <span>About Me</span>
          </div>
          <h2 className="about__title">
            <span className="reveal-mask"><span className="reveal-line">一个用</span></span>
            <span className="reveal-mask"><span className="reveal-line about__title-stroke">视觉</span></span>
            <span className="reveal-mask"><span className="reveal-line">与</span></span>
            <span className="reveal-mask"><span className="reveal-line about__title-stroke">代码</span></span>
            <span className="reveal-mask"><span className="reveal-line">讲故事的人。</span></span>
          </h2>
        </div>

        <div className="about__grid">
          {/* 左 */}
          <div className="about__left">
            <div className="about__avatar">
              <Avatar />
              <div className="about__avatar-meta">
                <span className="mono">FIG.01</span>
                <span className="mono">LUO LIJI · 2003</span>
              </div>
            </div>

            <ul className="about__info">
              <li>
                <span className="mono about__info-label">SCHOOL</span>
                <span className="about__info-value">{resume.school}</span>
              </li>
              <li>
                <span className="mono about__info-label">MAJOR</span>
                <span className="about__info-value">{resume.major}</span>
              </li>
              <li>
                <span className="mono about__info-label">PERIOD</span>
                <span className="about__info-value">{resume.eduPeriod}</span>
              </li>
            </ul>
          </div>

          {/* 右 */}
          <div className="about__right">
            <div className="about__bio">
              <p className="about__lead">
                具备计算机多媒体设计复合背景，熟练掌握数字媒体创作、平面视觉设计能力。
                擅长游戏视觉、UI 素材制作。
              </p>
              <p className="about__text">
                拥有多项艺术赛事获奖经历与非遗视觉项目实战经验，具备完整项目落地思维。
                热爱游戏行业，持续钻研各类美术风格，注重画面细节，
                沟通协作良好，可高效配合团队完成设计任务。
              </p>

              <div className="about__contact">
                <a href={`mailto:${resume.email}`} className="about__contact-item">
                  <span className="mono about__contact-label">EMAIL</span>
                  <span className="about__contact-value">{resume.email}</span>
                </a>
                <a href={`tel:${resume.phone}`} className="about__contact-item">
                  <span className="mono about__contact-label">PHONE</span>
                  <span className="about__contact-value">{resume.phone}</span>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="about__stats">
              {resume.stats.map((s, i) => (
                <div className="about__stat" key={i}>
                  <span className="about__stat-num mono">/{String(i + 1).padStart(2, '0')}</span>
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 课程 */}
        <div className="about__courses">
          <span className="mono about__courses-label">COURSEWORK</span>
          <div className="about__course-list">
            {resume.courses.map((c, i) => (
              <span className="about__course" key={i}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
