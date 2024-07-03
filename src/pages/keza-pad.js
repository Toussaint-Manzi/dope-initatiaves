import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductDetails from '@/components/ProductDetails'
import React from 'react'

const kezaPad = () => {
  const detailsArray = [
    "Keza Pad Bank vending machines will be strategically placed in high schools across the country, providing a discreet and convenient way for students to obtain sanitary pads when needed. With just a simple tap of a card, girls will be able to access high-quality pads, eliminating the stress and embarrassment often associated with menstruation.",
    "By subsidizing the cost of pads, we're making sure that financial constraints don't stand in the way of a girl's education and well-being. Every girl, regardless of her socioeconomic background, deserves the freedom to attend school and participate in daily activities without the burden of period stigma.",
    "At the heart of this initiative lies a powerful message: menstruation is a natural and healthy process, and it should never be a source of shame or disadvantage. By providing easy access to sanitary pads, we're helping to normalize conversations around menstrual health and break down the taboos that have long surrounded this topic.",
    "Keza Pad Bank is a collaborative effort, and we're calling on schools, organizations, and individuals to join us in this mission. By donating to our cause, you're not only contributing pads but also investing in the future of young women, ensuring that they can pursue their dreams without compromising their dignity or education.",
    "Together, we can create a world where period poverty is a thing of the past, and every girl has the resources and support she needs to navigate this natural part of life with confidence and ease.",
  ];
  return (
    <div>
      <ProductDetails 
        title="Keza Pad Bank" 
        details="We believe that every girl deserves to have her basic needs met, including access to essential feminine hygiene products. That's why we're proud to introduce Keza Pad Bank, a novel vending machine initiative that aims to tackle period poverty and ensure that no girl misses school due to lack of access to sanitary pads." 
        paragraphs={detailsArray}
        coverPhoto="/assets/images/PadBank.png"
        logo="/assets/images/Logo-2.png"
      />
    </div>
  )
}

export default kezaPad
