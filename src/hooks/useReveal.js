// ===========================================
// Reveal hooks — 复用 GSAP mask reveal & stagger
// ===========================================

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, EASE, DURATION, STAGGER, START } from '../data/motion'

/**
 * 标题 mask reveal — 把 .reveal-line 子元素从 yPercent:110 推到 0
 * HTML 结构要求：
 *   <h2>
 *     <span className="reveal-mask"><span className="reveal-line">...</span></span>
 *     ...
 *   </h2>
 */
export function useRevealTitle(ref, options = {}) {
  useGSAP(() => {
    const lines = ref.current.querySelectorAll('.reveal-line')
    if (!lines.length) return

    gsap.set(lines, { yPercent: 110 })

    gsap.to(lines, {
      yPercent: 0,
      duration: DURATION.slow,
      ease: EASE.smooth,
      stagger: STAGGER.base,
      scrollTrigger: {
        trigger: ref.current,
        start: START.near,
        ...options.scrollTrigger,
      },
    })
  }, { scope: ref, dependencies: options.dependencies || [] })
}

/**
 * 通用进场 — 元素从 y+opacity 进入
 */
export function useRevealItems(ref, selector, options = {}) {
  useGSAP(() => {
    const els = ref.current.querySelectorAll(selector)
    if (!els.length) return

    gsap.from(els, {
      y: options.y ?? 60,
      opacity: 0,
      duration: options.duration ?? DURATION.slow,
      ease: options.ease ?? EASE.primary,
      stagger: options.stagger ?? STAGGER.base,
      scrollTrigger: {
        trigger: options.trigger || ref.current,
        start: options.start || START.near,
        ...options.scrollTrigger,
      },
    })
  }, { scope: ref, dependencies: options.dependencies || [] })
}

/**
 * 图片 / 封面 reveal + parallax
 * - 外层 overflow:hidden，内层做 clip-path inset 揭开 + scale 归位
 * - 滚动驱动 yPercent parallax
 */
export function useMediaReveal(ref, selector, options = {}) {
  useGSAP(() => {
    const media = ref.current.querySelectorAll(selector)
    if (!media.length) return

    media.forEach((m) => {
      const inner = m.querySelector('.media-inner') || m.firstElementChild || m

      // 初始：scale 略大 + clip-path 上方遮住
      gsap.set(inner, {
        scale: 1.18,
        transformOrigin: 'center center',
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: m,
          start: options.revealStart || 'top 85%',
          once: true,
        },
      })

      // reveal：scale 归位
      tl.to(inner, {
        scale: 1,
        duration: DURATION.epic,
        ease: EASE.primary,
      }, 0)

      // parallax：滚动驱动 yPercent 位移
      gsap.to(inner, {
        yPercent: options.parallax ?? -12,
        ease: 'none',
        scrollTrigger: {
          trigger: m,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })
  }, { scope: ref, dependencies: options.dependencies || [] })
}

export { useRef }
