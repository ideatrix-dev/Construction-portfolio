import { useEffect } from 'react'
import Background from './components/Background.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import WhyUs from './components/WhyUs.jsx'
import Pricing from './components/Pricing.jsx'
import Cities from './components/Cities.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('main section > .wrap')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in'))
      return
    }

    const textEls = document.querySelectorAll(
      'main h2, main h3, main .sub, main .num, main .price, main .card p, main summary, main details p, .hero p, .hero .btn, .hero .stats b, .hero .stats small'
    )

    textEls.forEach((el) => {
      const text = el.textContent.trim()
      if (el.dataset.split === 'true' || !text) return

      el.dataset.split = 'true'
      el.setAttribute('aria-label', text)
      const words = text.split(/\s+/)
      el.textContent = ''

      words.forEach((word, i) => {
        const outer = document.createElement('span')
        const inner = document.createElement('span')
        inner.className = 'word'
        inner.style.animationDelay = `${0.05 + Math.min(i, 24) * 0.04}s`
        inner.textContent = word
        outer.appendChild(inner)
        if (i < words.length - 1) outer.appendChild(document.createTextNode(' '))
        el.appendChild(outer)
      })
    })

    targets.forEach((el) => el.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyUs />
        <Pricing />
        <Cities />
        <Testimonials />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
