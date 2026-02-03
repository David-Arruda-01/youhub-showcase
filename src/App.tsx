import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Architecture from './components/Architecture'
import EcommerceSolution from './components/EcommerceSolution'
import Features from './components/Features'
import Technology from './components/Technology'
import Modules from './components/Modules'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Overview />
      <Architecture />
      <EcommerceSolution />
      <Features />
      <Technology />
      <Modules />
      <Footer />
    </div>
  )
}
