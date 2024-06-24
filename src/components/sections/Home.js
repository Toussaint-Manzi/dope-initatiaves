import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import personImage from '../../../public/assets/images/character1.webp';  // Update the path to your main PNG image
import squareImage1 from '../../../public/assets/images/slider-icon2.svg';  // Update the path to your square PNG images

const Home = () => {
  return (
    <div
      className='w-full h-screen'
      style={{
        backgroundColor: '#F9F0EC',
        backgroundImage: 'url(/assets/images/background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }}
    >
      <div className='w-[60%] mx-auto flex justify-between items-center h-full '>
        <div className='flex flex-col items-start self-start mt-48'>
          <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-semibold'>Dope Initiatives</h1>
          <div className='grotesk leading-tight'>
            <h1 className='text-[70px] text-black font-[600] '>We will</h1>
            <h1 className='text-[70px] text-black font-[600]'>Increase you sales</h1>
            <h1 className='text-[70px] text-black font-[600]'>By <span className='bg-[#FF0054] text-white rounded-md px-5'>Three times</span></h1>
          </div>
          <div className='relative w-full'>
            <Link href="#section1" className='absolute z-10 h-[60px] bg-white border-[3px] border-[#FF0054] rounded-md flex items-center justify-center text-[#FF0054] px-8 py-8 mt-16 hover:bg-[#FF0054] hover:text-white'>
              <FaArrowRight className='text-[20px] mr-4'/>
              <h1 className="text-[19px] grotesk font-medium">See our products</h1>
            </Link>
            <Link href="#section1" className='absolute top-[7px] left-[7px] h-[60px] bg-[#F0D9DE] border-[3px] border-[#F0D9DE] rounded-md flex items-center justify-center text-[#FF0054] px-8 py-8 mt-16'>
              <FaArrowRight className='text-[20px] mr-4'/>
              <h1 className="text-[19px] grotesk font-medium">See our products</h1>
            </Link>
          </div>
        </div>
        <div className='relative w-[45%] h-[90%]'>
          <Image
            src={personImage}
            layout="fill"
            objectFit="contain"
            alt="Person"
            style={{ top: '0%', left: '25%' }}
          />
          <div className='absolute w-[70px] h-[70px] animate-bounce' style={{ top: '40%', left: '5%' }}>
            <Image src={squareImage1} width={70} height={70} alt="Square 1"/>
          </div>
          <div className='absolute w-[70px] h-[70px] animate-bounce' style={{ top: '10%', right: '5%' }}>
            <Image src={squareImage1} width={70} height={70} alt="Square 2"/>
          </div>
          <div className='absolute w-[70px] h-[70px] animate-bounce' style={{ top: '50%', left: '100%' }}>
            <Image src={squareImage1} width={70} height={70} alt="Square 3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
