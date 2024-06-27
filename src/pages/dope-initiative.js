import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductDetails from '@/components/ProductDetails'
import React from 'react'

const dopeInitiative = () => {
  return (
    <div>
        <Navbar/>
        <ProductDetails 
            title="Dope Initiative" 
            details="Dope Initiative is dedicated to empowering girls and women by championing reproductive health awareness and access to essential resources. Through innovative initiatives, they are creating a supportive environment for girls to thrive." 
            coverPhoto="/assets/images/Pose 1.png"
            logo="/assets/images/logo.png"
        />
        <Footer/>
    </div>
  )
}

export default dopeInitiative
