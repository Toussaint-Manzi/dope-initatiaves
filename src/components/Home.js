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

    const fileId = '1jNU2NCDZn9pJlphvg3XkIIInzk6JgTyU'
    const downloadUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;

  return (
    <div className={`${styles.myFont}flex flex-col h-screen bg-white px-44 xl:px-20 md:h-full xs:px-10 sm:h-full xtra:px-5`}>
        <div className='flex justify-end'>
            <div className=' w-32 h-24 relative '>
                <Image
                    src={logo}
                    fill
                />
            </div>
        </div>
        <div className={`w-full flex justify-between  md:flex-col md:justify-between md:h-[1000px] md:items-center xtra:h-[880px]`}>
            <div className={`${styles.medium} w-[60%] flex self-start relative xl:w-[70%] md:w-[90%] sm:mb-5`}>
                <div className={`${styles.pink} h-[34rem] w-[50%] absolute rounded-3xl my-auto bg-[#ff6896] z-0 larg:w-[60%]`}>

                </div>
                <div className={`${styles.div2} h-[28rem] my-10 w-[60%] absolute z-10 ml-32 flex flex-col larg:w-[70%] xs:h-[28rem] xtra:h-[25rem]`}>
                    <div className='h-full w-full relative sm:mb-[50px] xtra:mb-[10px]'>
                        <Image
                            src={screens}
                            fill
                        />
                    </div>
                    <div className='md:hidden'>
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
            <div className={`${styles.keza} w-[35%] h-[34rem] flex flex-col justify-center xtra:justify-start xtra:h-[28rem]`}>
                <div className='h-[70px] w-[90px] relative'>
                    <Image
                        src={logo2}
                        fill
                    />
                </div>
                <h1 className={`${styles.myFont2} uppercase text-lg text-[#ff6896] mt-10`}>keza quiz</h1>
                <p className={`${styles.myFont} text-md text-black`} >Keza Quiz is a game based online quiz that educates on the right information about sexual and reproductive health.</p>
                <div className='flex w-2/3 justify-between mt-10 xtra:w-[90%]'>
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
                <a href={downloadUrl} rel="noopener noreferrer" className="bg-black w-2/3  text-white hover:bg-gray-800  font-medium py-3 px-4 rounded inline-flex items-center mt-5 xtra:w-[90%]">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download for windows</span>
                </a>
            </div>
        </div>
        <div className='mdd:hidden -mt-10 mb-20 xtra:-mt-5 xtra:mb-10'>
            <h1 className={`${styles.myFont} text-white text-md font-semibold`}>Keza Quiz</h1>
            <div className='w-[130px] flex justify-between md:w-[200px] md:mx-auto'>
                <div className={`${styles.iconContainer} bg-white p-[2px] h-[23px] w-[23px] flex justify-center items-center rounded-full cursor-pointer`}>
                    <FaFacebookF className={`${styles.icon} text-[#ff6896] text-xs`}/>
                </div>
                <div className={`${styles.iconContainer} bg-white p-[2px] h-[23px] w-[23px] flex justify-center items-center rounded-full cursor-pointer`}>
                    <BsTwitter className={`${styles.icon} text-[#ff6896] text-xs`}/>
                </div>
                <div className={`${styles.iconContainer} bg-white p-[2px] h-[23px] w-[23px] flex justify-center items-center rounded-full cursor-pointer`}>
                    <BsLinkedin className={`${styles.icon} text-[#ff6896] text-xs`}/>
                </div>
                <div className={`${styles.iconContainer} bg-white p-[2px] h-[23px] w-[23px] flex justify-center items-center rounded-full cursor-pointer`}>
                    <AiFillInstagram className={`${styles.icon} text-[#ff6896] text-xs`}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home