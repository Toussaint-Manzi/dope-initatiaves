import React from 'react'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'


const Home = () => {
  return (
    <div className={`${styles.myFont} h-screen bg-white px-32 py-10 myFont`}>
        <div className='flex justify-end'>
            <div className=' w-32 h-24 relative '>
                <Image
                    src={logo}
                    fill
                />
            </div>
        </div>
    </div>
  )
}

export default Home