import Navbar from '@/components/Navbar'
import About from '@/components/sections/About'
import Home from '@/components/sections/Home'
import React from 'react'

const newApp = () => {
  return (
    <div className='bg-white'>
      <div className='h-full'>
        <Navbar/>
        <section id="Home" className="h-screen">
          <Home/>
        </section>
        <section id="Home" className="h-screen">
          <About/>
        </section>
      </div>
    </div>
  )
}

export default newApp
