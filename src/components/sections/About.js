import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import logo2 from '../../../public/assets/images/logo2.png'
import logo1 from '../../../public/assets/images/logo.png';
import logo4 from '../../../public/assets/images/shop.png';
import logo3 from '../../../public/assets/images/Logo-2.png';

import personImage from '../../../public/assets/images/character1.webp';  // Update the path to your main PNG image
import squareImage1 from '../../../public/assets/images/slider-icon2.svg';  // Update the path to your square PNG images

const About = () => {
  return (
    <div className='bg-white w-[60%] mx-auto py-32'>
        <div className='flex flex-col items-start self-start'>
          <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-semibold'>Dope Initiatives</h1>
          <div className='grotesk leading-tight'>
            <h1 className='text-[55px] text-black font-[500] w-[65%]'>Championing reproductive health awareness and access to essential resources.</h1>
          </div>
        </div>
        <div className='flex justify-between mt-20'>
            <div>
                <div className='h-[30px] w-[100px] bg-[#FF0054] text-white rounded flex flex-col justify-center px-2'>
                    <h1 className='font-semibold text-white roboto'>01</h1>
                </div>
                <div className='h-[65px] w-[80px] relative my-8'>
                    <Image
                        src={logo1}
                        fill
                    />
                </div>
                <h1 className='grotesk text-[25px] text-black font-[400] leading-4'>Dope</h1>
                <h1 className='grotesk text-[25px] text-black font-[400]'>Initiative</h1>
                <h1 className='grotesk text-[17px] text-gray-500 font-[300] mt-5'>Restoring Dignity in Women</h1>
                <FaArrowRight className='text-black text-2xl mt-10'/>
            </div>
            <div>
                <div className='h-[30px] w-[100px] bg-[#fcb900] text-white rounded flex flex-col justify-center px-2'>
                    <h1 className='font-semibold text-white roboto'>02</h1>
                </div>
                <div className='h-[45px] w-[70px] relative my-10'>
                    <Image
                        src={logo2}
                        fill
                    />
                </div>
                <h1 className='grotesk text-[25px] text-black font-[400] leading-4'>Keza Quiz</h1>
                <h1 className='grotesk text-[25px] text-black font-[400]'>Game</h1>
                <h1 className='grotesk text-[17px] text-gray-500 font-[300] mt-5'>Where learning and play meet.</h1>
                <FaArrowRight className='text-black text-2xl mt-10'/>
            </div>
            <div>
                <div className='h-[30px] w-[100px] bg-[#00d084] text-white rounded flex flex-col justify-center px-2'>
                    <h1 className='font-semibold text-white roboto'>03</h1>
                </div>
                <div className='h-[35px] w-[100px] relative my-12'>
                    <Image
                        src={logo4}
                        fill
                    />
                </div>
                <h1 className='grotesk text-[25px] text-black font-[400] leading-4'>Ishyo</h1>
                <h1 className='grotesk text-[25px] text-black font-[400]'>E-shop</h1>
                <h1 className='grotesk text-[17px] text-gray-500 font-[300] mt-5'>Embracing Motherhood</h1>
                <FaArrowRight className='text-black text-2xl mt-10'/>
            </div>
            <div>
                <div className='h-[30px] w-[100px] bg-[#0693e3] text-white rounded flex flex-col justify-center px-2'>
                    <h1 className='font-semibold text-white roboto'>04</h1>
                </div>
                <div className='h-[85px] w-[120px] relative my-5'>
                    <Image
                        src={logo3}
                        fill
                    />
                </div>
                <h1 className='grotesk text-[25px] text-black font-[400] leading-4'>Keza Pad</h1>
                <h1 className='grotesk text-[25px] text-black font-[400]'>Bank</h1>
                <h1 className='grotesk text-[17px] text-gray-500 font-[300] mt-5'>Dispensing Decency</h1>
                <FaArrowRight className='text-black text-2xl mt-10'/>
            </div>
        </div>
    </div>
  )
}

export default About
