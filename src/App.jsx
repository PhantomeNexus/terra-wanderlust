import { useState } from 'react'
import Hero from './components/Hero'
import Experiences from './components/Experiences'
import Features from './components/Features'
import Destinations from './components/Destinations'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Features />
      <Experiences />
      <Destinations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
