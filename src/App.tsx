import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import TechGridBackground from './components/TechGridBackground'
import GlowOrbs from './components/GlowOrbs'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="relative min-h-screen bg-background font-sans">
      {/* Layered backgrounds: grid → orbs → particles (front) */}
      <TechGridBackground />
      <GlowOrbs />
      <ParticleBackground />
      {/* Subtle scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-scanlines opacity-[0.03]" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
