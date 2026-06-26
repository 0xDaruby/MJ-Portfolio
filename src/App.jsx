import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}