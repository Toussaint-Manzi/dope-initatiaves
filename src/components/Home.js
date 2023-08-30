import React from 'react'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import screens from '../../public/assets/images/screens.png'


const Home = () => {
  return (
    <div className={`${styles.myFont}flex flex-col h-screen bg-white px-72`}>
        <div className='flex justify-end'>
            <div className=' w-32 h-24 relative '>
                <Image
                    src={logo}
                    fill
                />
            </div>
        </div>
        <div className='w-full'>
            <div className='w-2/3 flex items-start relative'>
                <div className='h-[34rem] w-[50%] absolute rounded-3xl my-auto bg-[#ff6896] z-0'>

                </div>
                <div className='h-[23rem] my-20 w-[60%] absolute z-10 ml-32'>
                    <div className='h-full w-full relative'>
                        <Image
                            src={screens}
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