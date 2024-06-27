import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Home from '@/components/sections/Home'
import React from 'react'

const newApp = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <section id="Home">
        <Home/>
      </section>
      <section id="About">
        <About/>
      </section>
      <section id="Contact">
        <Contact/>
      </section>
      <Footer/>
    </div>
  )
}

export default newApp
