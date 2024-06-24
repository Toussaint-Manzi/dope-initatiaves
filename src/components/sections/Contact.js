import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMdMail, IoIosSend } from "react-icons/io";
import Image from 'next/image';
import personImage from '../../../public/assets/images/contact.webp';
import message from '../../../public/assets/images/message.webp';
import squareImage1 from '../../../public/assets/images/slider-icon2.svg';

const Contact = () => {
  return (
    <div className='bg-[#F9F0EC] h-full'>
        <div
            className='w-full h-full'
            style={{
                backgroundColor: '#F9F0EC',
                backgroundImage: 'url(/assets/images/background2.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain'
            }}
        >
            <div className='w-[60%] mx-auto flex justify-between items-center h-full '>
                <div className='flex flex-col items-start self-start mt-48 w-[50%]'>
                    <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-semibold'>Dope Initiatives</h1>
                    <div className='grotesk leading-tight'>
                        <h1 className='text-[70px] text-black font-[600]'>Contact <span className='bg-[#FF0054] text-white rounded-md px-5'>US</span></h1>
                        <h1 className='text-[40px] text-black font-[400] my-16'>Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia</h1>
                    </div>
                </div>
                <div className='relative w-[45%] h-[900px]'>
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
        <div className='bg-white w-[60%] mx-auto flex justify-between items-center h-[100px] rounded-3xl grotesk px-10'>
            <div className='flex items-center'>
                <FaPhone className='text-4xl text-[#FF0054] mr-3'/>
                <h1 className='text-[30px] text-black font-[400] my-16'>(+250) 788343434</h1>
            </div>
            <div className='flex items-center'>
                <IoMdMail className='text-4xl text-[#FF0054] mr-3'/>
                <h1 className='text-[30px] text-black font-[400] my-16'>dopeinitiativesltd@gmail.com</h1>
            </div>
        </div>
        <div className='relative bg-white w-[60%] mx-auto flex flex-col justify-between items-start h-full rounded-3xl grotesk px-20 my-48'>
            <div className='flex justify-between items-start '>
                <div className='w-[40%] flex flex-col justify-center items-center'>
                    <div className='absolute -top-24 h-[270px] w-[300px] my-8'>
                        <Image
                            src={message}
                            fill
                        />
                    </div>
                    <div className='mt-64'>
                        <h1 className='roboto text-[35px] text-black font-bold leading-tight'>Send us a message.</h1>
                        <h1 className='text-[38px] text-black font-[400] leading-tight'>We will contact you and give you our proposal completely free of charge</h1>
                    </div>
                </div>
                <form action="" className='w-[50%] px-5 py-10'>
                    <div className="relative h-11 w-full min-w-[200px] mb-10">
                        <input placeholder="Full Name*"
                            className="h-full w-full text-gray-700 border-b-[3px] border-[#eed3c9] bg-transparent font-sans text-[17px] font-normal text-blue-gray-700 transition-all placeholder:text-gray-700 disabled:border-0 disabled:bg-blue-gray-50   outline-none focus:border-[#FF0054] px-3" />  
                    </div>
                    <div className="relative h-11 w-full min-w-[200px] mb-10">
                        <input placeholder="Phone*"
                            className="h-full w-full text-gray-700 border-b-[3px] border-[#eed3c9] bg-transparent font-sans text-[17px] font-normal text-blue-gray-700 transition-all placeholder:text-gray-700 disabled:border-0 disabled:bg-blue-gray-50   outline-none focus:border-[#FF0054] px-3" />  
                    </div>
                    <div className="relative h-11 w-full min-w-[200px] mb-10">
                        <input type='email' placeholder="E-mail Address*"
                            className="h-full w-full text-gray-700 border-b-[3px] border-[#eed3c9] bg-transparent font-sans text-[17px] font-normal text-blue-gray-700 transition-all placeholder:text-gray-700 disabled:border-0 disabled:bg-blue-gray-50   outline-none focus:border-[#FF0054] px-3" />  
                    </div>
                    <div className="relative w-full min-w-[200px] mb-10">
                        <textarea id="message" rows="5" placeholder="Message...*"
                            className="block h-full w-full text-gray-700 border-b-[3px] border-[#eed3c9] bg-transparent font-sans text-[17px] font-normal text-blue-gray-700 transition-all placeholder:text-gray-700 disabled:border-0 disabled:bg-blue-gray-50   outline-none focus:border-[#FF0054] px-3" ></textarea>  
                    </div>
                    <Link href="#section1" className='h-[60px] self-start bg-white border-[3px] border-[#FF0054] rounded-md flex items-center justify-center text-[#FF0054] px-8 py-8 mt-16 hover:bg-[#FF0054] hover:text-white'>
                        <h1 className="text-[19px] grotesk font-medium mr-4">Send Message</h1>
                        <IoIosSend className='text-[30px]'/>
                    </Link>
                </form> 
            </div>
            <div className='h-[1px] w-full bg-gray-300 mt-10 mb-5'>
            </div>
            <div className='flex flex-row mb-10'>
                <h1 className='roboto text-[18px] text-gray-400 font-[400]'>Monday – Friday: 06:00 AM – 10:00 PM</h1>
                <h1 className='roboto text-[18px] text-gray-400 font-[400] ml-14'>Saturday – Sunday: 08:00 AM – 08:00 PM</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact
