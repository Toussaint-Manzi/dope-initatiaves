import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductDetails from '@/components/ProductDetails'
import React from 'react'

const kezaQuiz = () => {
  const detailsArray = [
    "Are you looking for an educational yet entertaining resource to help navigate the changes that come with growing up? Look no further than Keza Quiz, the free e-game designed to spread awareness about reproductive health among girls transitioning from childhood to teenage years.",
    "What sets Keza Quiz apart is its unique ability to make learning enjoyable. With vibrant graphics, relatable characters, and a user-friendly interface, the game creates a safe and judgment-free environment where you can ask questions, scatter myths, and gain valuable insights into reproductive health.",
    "By providing accurate and comprehensive information, the game aims to equip young girls with the confidence and awareness they need to navigate this transformative phase of their lives. Keza Quiz covers a wide range of often overlooked or stigmatized topics such as menstrual health, healthy relationships and contraceptive use (I got creative here because I’m not sure of what the game offers.) ",
    "The best part? Keza Quiz is accessible globally, ensuring that girls from all corners of the world can benefit from this invaluable resource. Whether you're in a classroom, at home, or on the go, this e-game is available at your fingertips, making it easier than ever to learn and grow.",
    "Keza Quiz is the ultimate companion for every girl navigating the complex world of reproductive health. Click here to be part of the initiative. (what should the call to action be?)"
  ];
  return (
    <div>
      <ProductDetails 
        title="Keza Quiz Game" 
        details="Keza Quiz is an interactive learning experience that breaks down complex topics into bite-sized, age-appropriate content. Through a series of engaging quizzes and games, embark on an exciting journey to understand the physical and emotional changes that occur during puberty" 
        paragraphs = {detailsArray}
        coverPhoto="/assets/images/Pose-3.png"
        logo="/assets/images/LOGO-KEZA-QUIZ.png"
      />
    </div>
  )
}

export default kezaQuiz
