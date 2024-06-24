import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

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
        <div className='w-[60%] mx-auto flex justify-between'>
            <div className='flex flex-col items-start'>
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
            <div>

            </div>
        </div>
    </div>
  );
};

export default Home;
