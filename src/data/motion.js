// ===========================================
// Motion system — GSAP presets
// 高级、克制、丝滑，避免廉价弹跳
// ===========================================

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// 全局注册插件（只注册一次）
gsap.registerPlugin(ScrollTrigger, useGSAP)

// ScrollTrigger 全局默认：节流 + 性能
ScrollTrigger.config({
  ignoreMobileResize: true,
})

// 缓动曲线库
export const EASE = {
  primary: 'power3.out',        // 通用出场，柔和有力
  soft: 'power2.out',           // 极柔和
  sharp: 'power4.out',          // 锐利，标题用
  smooth: 'expo.out',           // 丝滑，mask reveal 用
  ultraSmooth: 'expo.out',      // 别名
  // 自定义 cubic-bezier（接近 expo.out 但更克制）
  custom: 'cubic-bezier(0.16, 1, 0.3, 1)',
  // 轻微 settle（不弹跳，仅归位收尾）
  settle: 'cubic-bezier(0.22, 1, 0.36, 1)',
}

// 时长
export const DURATION = {
  micro: 0.4,
  fast: 0.7,
  base: 1.0,
  slow: 1.4,
  epic: 1.8,
  hero: 2.2,
}

// Stagger 间隔
export const STAGGER = {
  tight: 0.06,
  fast: 0.1,
  base: 0.14,
  slow: 0.2,
}

// ScrollTrigger 起点默认（视口顶部触发，元素进入视口 80%-85%）
export const START = {
  near: 'top 85%',
  mid: 'top 70%',
  far: 'top 60%',
}

export { gsap, ScrollTrigger, useGSAP }
