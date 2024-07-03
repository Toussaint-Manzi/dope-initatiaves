import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import personImage from '../../../public/assets/images/Pose 1.png';
import logo1 from '../../../public/assets/images/Keza-eshop-Logo.png';
import logo2 from '../../../public/assets/images/Logo-2.png';
import logo3 from '../../../public/assets/images/LOGO-KEZA-QUIZ.png';

const Home = () => {
  return (
    <div
      className='w-full h-screen sm:h-full'
      style={{
        backgroundColor: '#F9F0EC',
        backgroundImage: 'url(/assets/images/background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }}
    >
      <div className='w-[60%] mx-auto flex justify-between items-center h-full xs:w-[80%]'>
        <div className='flex flex-col items-start self-start mt-48'>
          <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-semibold'>Dope Initiatives</h1>
          <div className='grotesk leading-tight'>
            <h1 className='text-[70px] text-black font-[600] sm:text-[50px] xs:text-[35px]'>We are</h1>
            <h1 className='text-[70px] text-black font-[600] sm:text-[50px] xs:text-[35px]'>dedicated to empowering </h1>
            <h1 className='text-[70px] text-black font-[600] sm:text-[50px] xs:text-[35px]'><span className='bg-[#FF0054] text-white rounded-md px-5'>girls</span> and<span className='bg-[#FF0054] text-white rounded-md px-5'>women</span></h1>
          </div>
          <div className='relative w-full'>
            <Link href="/Packages" className='sm:h-[40px] xs:h-[30px] xs:w-2/3 xs:p-5 xs:mt-8 absolute z-10 h-[60px] bg-white border-[3px] border-[#FF0054] rounded-md flex items-center justify-center text-[#FF0054] px-8 py-8 mt-16 hover:bg-[#FF0054] hover:text-white'>
              <FaArrowRight className='text-[20px] mr-4'/>
              <h1 className="text-[19px] grotesk font-medium xs:text-[13px]">See our products</h1>
            </Link>
            <Link href="#" className='sm:h-[40px] xs:h-[30px] xs:w-2/3 xs:p-5 xs:mt-8 absolute top-[7px] left-[7px] h-[60px] bg-[#F0D9DE] border-[3px] border-[#F0D9DE] rounded-md flex items-center justify-center text-[#FF0054] px-8 py-8 mt-16'>
              <FaArrowRight className='text-[20px] mr-4'/>
              <h1 className="text-[19px] grotesk font-medium xs:text-[13px]">See our products</h1>
            </Link>
          </div>
        </div>
        <div className='relative w-[55%] h-[100%] xl:hidden'>
          <Image
            src={personImage}
            layout="fill"
            objectFit="contain"
            alt="Person"
            style={{ top: '0%', left: '10%' }}
          />
          <div className='absolute w-[150px] h-[150px] animate-bounce' style={{ top: '40%', left: '5%' }}>
            <Image src={logo1} width={100} height={100} alt="Square 1"/>
          </div>
          <div className='absolute w-[150px] h-[150px] animate-bounce' style={{ top: '10%', right: '5%' }}>
            <Image src={logo2} width={100} height={100} alt="Square 2"/>
          </div>
          <div className='absolute w-[150px] h-[150px] animate-bounce' style={{ top: '50%', left: '100%' }}>
            <Image src={logo3} width={100} height={100} alt="Square 3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
