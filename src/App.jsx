import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './Services'
import Process from './pages/Process'
import Industries from './pages/Industries'
import Technologies from './pages/Technologies'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Process/>
      <Industries/>
      <Technologies/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
