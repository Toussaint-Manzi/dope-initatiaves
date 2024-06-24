import Navbar from '@/components/Navbar'
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
      </div>
    </div>
  )
}

export default newApp
