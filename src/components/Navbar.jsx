import { useState, useEffect, useRef } from 'react'
import { resume } from '../data/resume'
import './Navbar.css'

/**
 * 独立时钟组件：每秒只重渲染自身，避免拖着整个 Navbar 重渲染。
 */
function Clock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const d = new Date()
      const hh = String(d.getHours()).padStart(2, '0')
      const mm = String(d.getMinutes()).padStart(2, '0')
      const ss = String(d.getSeconds()).padStart(2, '0')
      setTime(`${hh}:${mm}:${ss}`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="nav__time mono">
      <span className="nav__time-dot" /> {time} GMT+8
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    // rAF 节流：避免每次 scroll 事件都触发 React 渲染
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40)
        ticking.current = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // 初始化一次
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner section">
        <a href="#top" className="nav__logo">
          <span className="nav__logo-mark">L</span>
          <span className="nav__logo-text">{resume.nameEn}</span>
        </a>

        <nav className="nav__menu">
          <a href="#work" className="nav__link">
            <span className="nav__link-num">01</span>
            <span>作品</span>
          </a>
          <a href="#about" className="nav__link">
            <span className="nav__link-num">02</span>
            <span>关于</span>
          </a>
          <a href="#skills" className="nav__link">
            <span className="nav__link-num">03</span>
            <span>能力</span>
          </a>
          <a href="#awards" className="nav__link">
            <span className="nav__link-num">04</span>
            <span>荣誉</span>
          </a>
          <a href="#contact" className="nav__link">
            <span className="nav__link-num">05</span>
            <span>联系</span>
          </a>
        </nav>

        <div className="nav__right">
          <Clock />
          <a href="#contact" className="nav__cta">
            <span>Let's Talk</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
