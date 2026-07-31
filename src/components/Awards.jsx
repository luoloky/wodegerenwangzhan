import { useRef } from 'react'
import { resume } from '../data/resume'
import { gsap, useGSAP, EASE, DURATION, STAGGER, START } from '../data/motion'
import './Awards.css'

export default function Awards() {
  const root = useRef(null)

  useGSAP(() => {
    // useGSAP 自带 context + cleanup
    // 标题 mask reveal
    gsap.set('.awards__title .reveal-line', { yPercent: 110 })
    gsap.to('.awards__title .reveal-line', {
      yPercent: 0,
      duration: DURATION.slow,
      ease: EASE.smooth,
      stagger: STAGGER.base,
      scrollTrigger: { trigger: '.awards__header', start: START.near, once: true },
    })

    // eyebrow
    gsap.from('.awards__header .eyebrow', {
      y: 24,
      opacity: 0,
      duration: DURATION.base,
      ease: EASE.primary,
      scrollTrigger: { trigger: '.awards__header', start: START.near, once: true },
    })

    // 行 stagger（从左侧滑入 + 透明度）— 显式 fromTo
    gsap.fromTo('.award',
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.primary,
        stagger: STAGGER.base,
        scrollTrigger: { trigger: '.awards__list', start: START.near, once: true, invalidateOnRefresh: true },
      }
    )
  }, { scope: root })

  return (
    <section id="awards" className="awards" ref={root}>
      <div className="awards__inner section">
        <div className="awards__header">
          <div className="eyebrow">
            <span>04</span>
            <span>/</span>
            <span>Recognition</span>
          </div>
          <h2 className="awards__title">
            <span className="reveal-mask"><span className="reveal-line">HONORS &</span></span>
            <span className="reveal-mask"><span className="reveal-line awards__title-stroke">AWARDS</span></span>
          </h2>
        </div>

        <div className="awards__list">
          {resume.awards.map((a, i) => (
            <div className="award" key={i}>
              <span className="mono award__year">{a.year}</span>
              <span className="award__title">{a.title}</span>
              <span className="award__honor">{a.honor}</span>
              <span className="mono award__num">/{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
