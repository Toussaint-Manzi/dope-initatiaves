import React from 'react'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import screens from '../../public/assets/images/screens.png'
import logo2 from '../../public/assets/images/logo2.png'
import playStore from '../../public/assets/images/playstore.png'
import appStore from '../../public/assets/images/appstore.png'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter,BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'



const Home = () => {
  return (
    <div className={`${styles.myFont}flex flex-col h-screen bg-white px-44 xl:px-20`}>
        <div className='flex justify-end'>
            <div className=' w-32 h-24 relative '>
                <Image
                    src={logo}
                    fill
                />
            </div>
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='w-[60%] flex self-start relative xl:w-[70%]'>
                <div className='h-[34rem] w-[50%] absolute rounded-3xl my-auto bg-[#ff6896] z-0 larg:w-[60%]'>

                </div>
                <div className='h-[28rem] my-10 w-[60%] absolute z-10 ml-32 flex flex-col larg:w-[70%] larg:ml-24'>
                    <div className='h-full w-full relative'>
                        <Image
                            src={screens}
                            fill
                        />
                    </div>
                    <div className=''>
                        <h1 className={`${styles.myFont} text-white text-md font-semibold`}>Keza Quiz</h1>
                        <div className='w-[130px] flex justify-between'>
                            <div className='bg-white p-[2px] h-[23px] w-[23px] flex justify-center items-center rounded-full cursor-pointer'>
                                <FaFacebookF className='text-[#ff6896] text-xs'/>
                            </div>
                            <div className='bg-white p-[2px] h-[23px] w-[23px] flex justify-center items-center rounded-full cursor-pointer'>
                                <BsTwitter className='text-[#ff6896] text-xs'/>
                            </div>
                            <div className='bg-white p-[2px] h-[23px] w-[23px] flex justify-center items-center rounded-full cursor-pointer'>
                                <BsLinkedin className='text-[#ff6896] text-xs'/>
                            </div>
                            <div className='bg-white p-[2px] h-[23px] w-[23px] flex justify-center items-center rounded-full cursor-pointer'>
                                <AiFillInstagram className='text-[#ff6896] text-sm'/>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='w-[35%] h-[34rem] flex flex-col justify-center'>
                <div className='h-[70px] w-[90px] relative'>
                    <Image
                        src={logo2}
                        fill
                    />
                </div>
                <h1 className={`${styles.myFont2} uppercase text-lg text-[#ff6896] mt-10`}>keza quiz</h1>
                <p className={`${styles.myFont} text-md text-black`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio adipisci obcaecati voluptate? Sed maiores officiis nisi consequatur harum optio.</p>
                <div className='flex w-2/3 justify-between mt-10'>
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
            </div>
        </div>
    </div>
  )
}

export default Home