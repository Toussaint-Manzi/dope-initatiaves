import logo from '../../public/assets/images/logo.png'
import logo1 from '../../public/assets/images/Group 165.png'
import logo2 from '../../public/assets/images/Mastercard.svg'
import logo3 from '../../public/assets/images/PayPal.svg'
import logo4 from '../../public/assets/images/Visa.svg'
import logo5 from '../../public/assets/images/image 3.png'
import Image from "next/image"
import Link from 'next/link';
import { IoIosSend } from "react-icons/io";
import { MdLocationPin } from 'react-icons/md';
import { FaEnvelope,FaPhoneAlt ,FaFacebookF} from 'react-icons/fa';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import Lottie from 'lottie-react';
import messageAnimation from '../../public/assets/animations/message.json';

const Footer = () => {
  return (
    <footer className={`w-full px-[20%] mx-auto pb-8 pt-12 bg-white sm:px-[10%]`}>
        <div className={`flex flex-row justify-between xl:flex-col`}>
            <div className='xl:my-20'>
                <div className='w-32 h-24 relative'>
                    <Image
                        src={logo}
                    />
                </div>
                <h1 className='grotesk text-[25px] text-[#FF0054] font-[400]'>(+250) 789294922</h1>
                <div className='flex flex-col my-10'>
                    <h1 className='roboto text-[18px] text-black font-[400]'>Monday – Friday: 09:00 AM – 05:00 PM</h1>
                    <h1 className='roboto text-[18px] text-black font-[400]'>Saturday – Sunday: 10:00 AM – 05:00 PM</h1>
                </div>
                <div className='flex justify-between items-center w-full xl:w-[50%]'>
                    <div className='w-10'>
                        <Image
                            src={logo2}
                        />
                    </div>
                    <div className='w-10'>
                        <Image
                            src={logo4}
                        />
                    </div>
                    <div className='w-10'>
                        <Image
                            src={logo3}
                        />
                    </div>
                    <div className='w-10'>
                        <Image
                            src={logo1}
                        />
                    </div>
                    <div className='w-10'>
                        <Image
                            src={logo5}
                        />
                    </div>
                </div>
            </div>
            <div className='flex xl:flex-col mt-5'>
                <div className='flex w-[50%] justify-between xl:flex-col'>
                    <div>
                        <div className='mb-10'>
                            <h1 className='roboto text-lg font-semibold text-black'>Useful Links</h1>
                            <div className='w-[20px] border-b-[5px] border-orange-500 mt-1'></div>
                        </div>
                        <ul className='h-full'>
                            <Link href='/'>
                                <li className='text-md roboto text-black mb-1 cursor-pointer hover:text-[#FF0054] my-3'>Home</li>
                            </Link>
                            <Link href='/About'>
                                <li className='text-md roboto text-black mb-1 cursor-pointer hover:text-[#FF0054] my-3'>About us</li>
                            </Link>
                            <Link href='/Packages'>
                                <li className='text-md roboto text-black mb-1 cursor-pointer hover:text-[#FF0054] my-3'>Packages</li>
                            </Link>
                            <Link href='/our-work'>
                                <li className='text-md roboto text-black mb-1 cursor-pointer hover:text-[#FF0054] my-3'>Our work</li>
                            </Link>
                            <Link href='/Contact'>
                                <li className='text-md roboto text-black mb-1 cursor-pointer hover:text-[#FF0054] my-3'>Contact</li>
                            </Link>
                            <Link href='/privacy'>
                                <li className='text-md roboto text-black mb-1 cursor-pointer hover:text-[#FF0054] my-3'>Privacy</li>
                            </Link>
                        </ul>
                    </div>
                </div>         
                <div className='border border-[#eed3c9] w-[70%] xs:w-full flex flex-col items-center justify-between py-8 px-10 xl:my-20' >
                    <h1 className='roboto text-lg font-medium text-black text-center'>Stay up to date and subscribe to our newsletter</h1>
                    <div className='w-[150px] h-[150px]'>
                        <Lottie animationData={messageAnimation}/>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input type='email' placeholder="E-mail Address*"
                            className="h-full w-full text-gray-700 border-b-[3px] border-[#eed3c9] bg-transparent font-sans text-[17px] font-normal text-blue-gray-700 transition-all placeholder:text-gray-700 disabled:border-0 disabled:bg-blue-gray-50   outline-none focus:border-[#FF0054] px-3" />  
                    </div>
                    <Link href="#section1" className='h-[40px] bg-white border-[3px] border-[#FF0054] rounded-md flex items-center justify-center text-[#FF0054] mt-16 hover:bg-[#FF0054] hover:text-white px-10 py-6'>
                        <h1 className="text-[17px] grotesk font-medium">Subscribe</h1>
                    </Link>
                </div>
            </div>
        </div>
        <div className='h-[1px] w-full bg-[#eed3c9] mt-20'>
        </div>
        <div className='mt-10 w-full flex justify-between items-center xl:flex-col'>
            <p className='text-gray-500'>Dope initiatives © {new Date().getFullYear()} All rights reserved</p>
            <div className='flex justify-between w-[20%] xl:w-[35%] my-5 xs:w-[50%]'>
                <Link href="https://www.instagram.com/dope_initiatives/" target='_blank' className='w-[45px] h-[45px] bg-orange-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-amber-500 hover:transition-all hover:duration-300'>
                    <AiFillInstagram className='text-white text-xl'/>
                </Link>
                <Link href="https://x.com/Dope_Initiative" target='_blank' className='w-[45px] h-[45px] bg-orange-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-amber-500 hover:transition-all hover:duration-300'>
                    <BsTwitter className='text-white text-lg'/>
                </Link>
                <Link href="https://www.linkedin.com/company/dopeinitiatives" target='_blank' className='w-[45px] h-[45px] bg-orange-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-amber-500 hover:transition-all hover:duration-300'>
                    <BsLinkedin className='text-white text-lg'/>
                </Link>
                <Link href="mailto:dopeinitiativesltd@gmail.com" target='_blank' className='w-[45px] h-[45px] bg-orange-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-amber-500 hover:transition-all hover:duration-300'>
                    <MdEmail className='text-white text-lg'/>
                </Link>
            </div>
        </div> 
    </footer>
    
  )
}

export default Footer
