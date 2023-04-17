import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Tech from './components/Tech'
import StarsCanvas from './components/canvas/Stars'
import Experience from './components/Experience'
import Feedback from './components/Feedbacks'
import Works from './components/Works'
function App() {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary '>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
    <Hero/>
        
      </div>
      <About />
      <Tech />
      <Works />
      {/* <Experience /> */}
      {/* <Feedback/> */}
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
      </div>

    </div>
    </BrowserRouter>
  )
}

export default App
