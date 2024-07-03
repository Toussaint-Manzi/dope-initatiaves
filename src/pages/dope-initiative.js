import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductDetails from '@/components/ProductDetails'
import React from 'react'

const dopeInitiative = () => {
  const detailsArray = [
    "Keza Quiz, Dope Initiative’s brainchild is an engaging e-game that educates young girls about puberty and reproductive health. ",
    "Dope Initiative also created Keza Pad Bank, a network of vending machines that is providing affordable sanitary pads in schools, tackling period poverty, and more recently, the initiative added Ishyo e-shop to the family, which offers a comprehensive range of maternity and reproductive health products, ensuring women have access to essentials throughout their journeys.",
    "With a mission to create a world free from period poverty, stigma, and barriers to essential healthcare, the initiative is paving the way for a more inclusive and empowered future for girls and women."
  ];
  return (
    <div>
        <ProductDetails 
            title="Dope Initiative" 
            details="Dope Initiative is dedicated to empowering girls and women by championing reproductive health awareness and access to essential resources. Through innovative initiatives, they are creating a supportive environment for girls to thrive." 
            paragraphs={detailsArray}
            coverPhoto="/assets/images/Pose 1.png"
            logo="/assets/images/logo.png"
        />
    </div>
  )
}

export default dopeInitiative
