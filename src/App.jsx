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
