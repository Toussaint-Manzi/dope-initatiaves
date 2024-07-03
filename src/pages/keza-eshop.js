import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductDetails from '@/components/ProductDetails'
import React from 'react'

const kezaEshop = () => {
  const detailsArray = [
    "By providing a centralized marketplace for maternity and reproductive health products, we're addressing a critical need while creating opportunities for local entrepreneurs and businesses to thrive.",
    "Our carefully curated selection of products includes everything from prenatal vitamins and breastfeeding accessories to menstrual cups and feminine hygiene products. We understand that every woman's journey is unique, which is why we offer a diverse range of options to cater to individual needs and preferences.",
    "A portion of our proceeds is dedicated to supporting sexual and reproductive health and rights (SRHR) victims, ensuring that they have access to the resources and support they need to rebuild their lives. At Ishyo Shop, we believe in creating a world where every woman can thrive, free from fear, stigma, and barriers to essential healthcare."
  ];
  return (
    <div>
      <ProductDetails 
        title="Keza E-shop" 
        details="We believe that every woman, deserves access to high-quality maternity and reproductive health products. That's why we're proud to introduce Keza Shop, an innovative e-commerce platform that aims to put an end to the scarcity of these essential items." 
        paragraphs = { detailsArray }
        coverPhoto="/assets/images/e-shops.png"
        logo="/assets/images/Keza-eshop-Logo.png"
      />
    </div>
  )
}

export default kezaEshop
