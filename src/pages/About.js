import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";


const About = () => {
  return (
    <div className='h-screen bg-[#F9F0EC] w-full px-[10%] pt-[200px] flex justify-between items-center'>
        <div className='relative h-[500px] w-[45%]'>
            <div className='absolute h-[350px] w-[550px] rounded-xl'>
                <div className="w-full  h-full p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover  object-center cursor-pointer"
                        src="/assets/images/gall6.jpg"
                        fill
                    />
                </div>
            </div>
            <div className='absolute bottom-[10%] right-[0%] h-[200px] w-[350px] rounded-xl'>
                <div className="w-full  h-full p-1 md:p-2 relative">
                    <Image
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover  object-center cursor-pointer"
                        src="/assets/images/gall4.jpeg"
                        fill
                    />
                </div>
            </div>
        </div>
        <div className='w-[45%] self-start'>
            <h1 className='grotesk text-[32px] text-[#FF0054] font-semibold'>Who we are</h1>
            <h1 className='text-[30px] text-black font-[600] roboto my-6'>Dope Initiative is dedicated to empowering girls and women by championing reproductive health awareness and access to essential resources.</h1>
            <h1 className='text-[20px] text-black font-[300] roboto my-2'>Keza Quiz, Dope Initiative’s brainchild is an engaging e-game that educates young girls about puberty and reproductive health. </h1>
            <h1 className='text-[20px] text-black font-[300] roboto'>Dope Initiative also created Keza Pad Bank, a network of vending machines that is providing affordable sanitary pads in schools, tackling period poverty, and more recently, the initiative added Ishyo e-shop to the family, which offers a comprehensive range of maternity and reproductive health products, ensuring women have access to essentials throughout their journeys.</h1>
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
