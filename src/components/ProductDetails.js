import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import personImage from '../../public/assets/images/Pose 1.png';
import logo1 from '../../public/assets/images/logo.png';
import logo2 from '../../public/assets/images/Logo-2.png';
import logo3 from '../../public/assets/images/LOGO-KEZA-QUIZ.png';
import playStore from '../../public/assets/images/playstore.png';
import appStore from '../../public/assets/images/appstore.png';
import Lottie from 'lottie-react';
import commingSoonAnimation from '../../public/assets/animations/coming_soon.json'

const ProductDetails = ({
    title,
    details,
    coverPhoto,
    logo
}) => {

    const fileId = '1jNU2NCDZn9pJlphvg3XkIIInzk6JgTyU'
    const downloadUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;

  return (
    <div
      className='w-full h-screen lg:h-full'
      style={{
        backgroundColor: '#F9F0EC',
        backgroundImage: 'url(/assets/images/background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }}
    >
      <div className='w-[60%] mx-auto flex justify-between items-center h-full xs:w-[85%] xs:pb-10'>
        <div className='flex flex-col items-start self-start mt-48 w-[50%] xl:w-[80%] xs:w-[95%] xs:mt-32'>
          <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-semibold'>{title}</h1>
          <div className='grotesk leading-tight'>
            <h1 className='text-[30px] text-black font-[600] xs:text-[25px]'>{details}</h1>
          </div>
            <div className={title === "Keza E-shop"? 'w-32 h-14 relative mt-10' : 'w-32 h-24 relative mt-10'}>
                <Image src={logo} fill alt="Logo" />
            </div>
            {title === "Keza Quiz Game" &&
            <div className='w-full'>
                <div className='flex w-[50%] justify-between mt-10 xtra:w-[90%]'>
                    <div className='h-[45px] w-[130px] relative cursor-pointer'>
                        <Image
                            src={appStore}
                            fill
                        />
                    </div>
                    <div className='h-[45px] w-[130px] relative cursor-pointer'>
                        <Image
                            src={playStore}
                            fill
                        />
                    </div>
                    
                </div>
                <a href={downloadUrl} rel="noopener noreferrer" className="bg-black w-[50%] text-white hover:bg-gray-800  font-medium py-3 px-4 rounded inline-flex items-center mt-5 xtra:w-[90%]">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download for windows</span>
                </a>
            </div>}

            {
              title === 'Keza E-shop' &&
              <div className='-mt-24 -ml-10 w-[450px] xs:w-[350px] xs:-mt-16'>
                <Lottie animationData={commingSoonAnimation}/>
              </div>
            }
        </div>
        <div className='relative w-[45%] h-[100%] xl:hidden'>
          <Image
            src={coverPhoto}
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

export default ProductDetails;
