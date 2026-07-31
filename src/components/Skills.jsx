import { useRef } from 'react'
import { resume } from '../data/resume'
import { gsap, useGSAP, EASE, DURATION, STAGGER, START } from '../data/motion'
import './Skills.css'

export default function Skills() {
  const root = useRef(null)

  useGSAP(() => {
    // useGSAP 自带 context + cleanup
    // 标题 mask reveal
    gsap.set('.skills__title .reveal-line', { yPercent: 110 })
    gsap.to('.skills__title .reveal-line', {
      yPercent: 0,
      duration: DURATION.slow,
      ease: EASE.smooth,
      stagger: STAGGER.base,
      scrollTrigger: { trigger: '.skills__header', start: START.near, once: true },
    })

    // eyebrow + intro
    gsap.from('.skills__header .eyebrow', {
      y: 24,
      opacity: 0,
      duration: DURATION.base,
      ease: EASE.primary,
      scrollTrigger: { trigger: '.skills__header', start: START.near, once: true },
    })
    gsap.from('.skills__intro', {
      y: 40,
      opacity: 0,
      duration: DURATION.slow,
      ease: EASE.primary,
      scrollTrigger: { trigger: '.skills__header', start: START.near, once: true },
    })

    // 能力卡 stagger — 显式 fromTo，避免 from() 在 ScrollTrigger 未触发时状态异常
    gsap.fromTo('.skill-card',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        stagger: STAGGER.base,
        scrollTrigger: { trigger: '.skills__grid', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )

    // 方法论 stagger
    gsap.fromTo('.skills__philosophy-item',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        stagger: STAGGER.base,
        scrollTrigger: { trigger: '.skills__philosophy', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )
  }, { scope: root })

  return (
    <section id="skills" className="skills" ref={root}>
      <div className="skills__inner section">
        <div className="skills__header">
          <div className="skills__header-left">
            <div className="eyebrow">
              <span>03</span>
              <span>/</span>
              <span>Capabilities</span>
            </div>
            <h2 className="skills__title">
              <span className="reveal-mask"><span className="reveal-line">WHAT I</span></span>
              <span className="reveal-mask"><span className="reveal-line skills__title-stroke">BRING</span></span>
            </h2>
          </div>
          <div className="skills__header-right">
            <p className="skills__intro">
              复合背景让我能在「设计」与「工程」之间自由穿梭，
              把脑海里的画面，转化为可被运行的产品。
            </p>
          </div>
        </div>

        <div className="skills__grid">
          {resume.skills.map((s, i) => (
            <article className="skill-card" key={i}>
              <div className="skill-card__head">
                <span className="mono skill-card__num">{s.num}</span>
                <span className="skill-card__plus" aria-hidden="true">+</span>
              </div>

              <div className="skill-card__body">
                <h3 className="skill-card__title">
                  <span className="skill-card__title-cn">{s.title}</span>
                  <span className="skill-card__title-en mono">{s.en}</span>
                </h3>
                <p className="skill-card__desc">{s.desc}</p>
              </div>

              <div className="skill-card__foot">
                <span className="mono skill-card__foot-label">TOOLS</span>
                <div className="skill-card__tools">
                  {s.tools.map((t, j) => (
                    <span className="skill-card__tool" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-card__bg" aria-hidden="true">{s.num}</div>
            </article>
          ))}
        </div>

        {/* 方法论 */}
        <div className="skills__philosophy">
          <div className="skills__philosophy-item">
            <span className="mono skills__philosophy-num">/01</span>
            <h4 className="skills__philosophy-title">细节优先</h4>
            <p className="skills__philosophy-text">
              注重画面细节与视觉一致性，把每一个像素当作叙事的一部分。
            </p>
          </div>
          <div className="skills__philosophy-item">
            <span className="mono skills__philosophy-num">/02</span>
            <h4 className="skills__philosophy-title">跨界思维</h4>
            <p className="skills__philosophy-text">
              设计 + 编程 + 游戏，让不同领域的语言在同一项目里互相成就。
            </p>
          </div>
          <div className="skills__philosophy-item">
            <span className="mono skills__philosophy-num">/03</span>
            <h4 className="skills__philosophy-title">项目落地</h4>
            <p className="skills__philosophy-text">
              具备完整项目落地思维，从概念到交付的每一个环节都不掉链子。
            </p>
          </div>
          <div className="skills__philosophy-item">
            <span className="mono skills__philosophy-num">/04</span>
            <h4 className="skills__philosophy-title">持续学习</h4>
            <p className="skills__philosophy-text">
              持续钻研各类美术风格与新技术，保持对行业前沿的敏锐度。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
