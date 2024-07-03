import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";


const About = () => {
  return (
    <div className='h-screen bg-[#F9F0EC] w-full px-[10%] pt-[200px] flex justify-between items-center xl:h-full xl:py-[150px]'>
        <div className='relative h-[500px] w-[45%] xl:hidden'>
            <div className='absolute h-[350px] w-[550px] rounded-xl'>
                <div className="w-full  h-full p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover  object-center cursor-pointer"
                        src="/assets/images/gall5.jpeg"
                        fill
                    />
                </div>
            </div>
            <div className='absolute bottom-[10%] right-[0%] h-[200px] w-[350px] rounded-xl'>
                <div className="w-full  h-full p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-2xl object-cover  object-center cursor-pointer"
                        src="/assets/images/gall4.jpeg"
                        fill
                    />
                </div>
            </div>
        </div>
        <div className='w-[45%] self-start xl:w-full'>
            <h1 className='grotesk text-[32px] text-[#FF0054] font-semibold xs:text-[25px]'>Who we are</h1>
            <h1 className='text-[25px] text-black font-[600] roboto my-6 xs:text-[20px]'>Dope Initiatives is a young-led social enterprise committed to revolutionizing sexual reproductive health education in a fun way. Additionally, we are contributing to the end of period poverty by distributing free and sustainable sanitary pads in secondary schools using the Keza Pad Bank, a sanitary pad vending machine.</h1>
            <h1 className='text-[20px] text-black font-[300] roboto my-2 xs:text-[18px]'>We provide evidence-based sexual and reproductive information in a friendly, trustful, and inclusive way using the Keza Quiz Game, focusing on raising a healthy, thriving generation free from teenage pregnancies, unwanted pregnancies, and sexually transmitted infections, including HIV/AIDS.</h1>
            <h1 className='text-[20px] text-black font-[300] roboto xs:text-[18px]'>Dope Initiatives is a leading and licensed health gaming company based in Rwanda. It is a friendly, safe, trustful, and informative platform for young people and contributes to a girl's education and women's health.</h1>
            <div className='relative w-full'>
                <Link href="/Contact" className='absolute z-10 h-[60px] bg-white border-[3px] border-[#FF0054] rounded-md flex items-center justify-center text-[#FF0054] px-8 py-8 mt-16 hover:bg-[#FF0054] hover:text-white'>
                    <h1 className="text-[19px] grotesk font-medium">Get In Touch</h1>
                    <FaArrowRight className='text-[20px] ml-4'/>
                </Link>
                <Link href="#" className='absolute top-[7px] left-[7px] h-[60px] bg-[#F0D9DE] border-[3px] border-[#F0D9DE] rounded-md flex items-center justify-center text-[#FF0054] px-8 py-8 mt-16'>
                <FaArrowRight className='text-[20px] mr-4'/>
                <h1 className="text-[19px] grotesk font-medium">Get in Touch</h1>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About
