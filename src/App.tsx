import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import TechGridBackground from './components/TechGridBackground'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
// import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="relative min-h-screen font-sans">
      <TechGridBackground />
      <ParticleBackground />
      <div className="pointer-events-none fixed inset-0 z-1 bg-scanlines opacity-[0.01]" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-2">
        <Hero />
        <About />
        <Experience />
        {/* <Projects /> */}
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
