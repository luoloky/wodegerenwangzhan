import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Contact from './components/Contact'
import { ScrollTrigger } from './data/motion'
import './App.css'

function App() {
  // 所有组件挂载后刷新 ScrollTrigger 位置
  // 关键：等中文字体加载完成后再 refresh，否则 trigger 起点会随布局变化而错位
  useEffect(() => {
    let raf1, t1, t2

    const refresh = () => {
      ScrollTrigger.refresh()
    }

    // 首次 rAF 确保 DOM 已绘制
    raf1 = requestAnimationFrame(refresh)
    // 字体加载完成后再刷新（中文字体可能显著改变布局）
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh)
    }
    // 多重 fallback：300ms / 1000ms / window load
    t1 = setTimeout(refresh, 300)
    t2 = setTimeout(refresh, 1000)
    const onLoad = () => refresh()
    window.addEventListener('load', onLoad)

    return () => {
      cancelAnimationFrame(raf1)
      clearTimeout(t1)
      clearTimeout(t2)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
    </div>
  )
}

export default App
