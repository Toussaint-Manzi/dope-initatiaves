import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductDetails from '@/components/ProductDetails'
import React from 'react'

const ishyoEshop = () => {
  return (
    <div>
        <Navbar/>
        <ProductDetails 
            title="Ishyo E-shop" 
            details="We believe that every woman, deserves access to high-quality maternity and reproductive health products. That's why we're proud to introduce Ishyo Shop, an innovative e-commerce platform that aims to put an end to the scarcity of these essential items." 
            coverPhoto="/assets/images/Pose 1.png"
            logo="/assets/images/shop.png"
        />
        <Footer/>
    </div>
  )
}

export default ishyoEshop
