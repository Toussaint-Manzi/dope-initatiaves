import { useState } from 'react';
import Image from 'next/image';
import { GiLaurelsTrophy } from "react-icons/gi";
import { LuLink } from "react-icons/lu";
import Link from 'next/link';

const ourWork = () => {

    const [ selected,setSelected ] = useState(null);

    const handleClick = (imageUrl) => {
        setSelected(imageUrl);
    }

    const closeModal = () =>{
        setSelected(null);
    }

  return (
    <div className='w-full px-[20%] pb-48 bg-[#F9F0EC] pt-[150px] h-full 2xl:h-full xl:px-[10%] xs:px-5 xs:w-full'>
            <h1 className={`grotesk mx-auto text-[#FF0054] text-3xl font-[700] text-center mb-20`} >Our work</h1>
            <div className="flex justify-between h-[600px] flex-wrap">
                <div className="flex w-1/2 flex-wrap sm:w-full">
                  <div className="w-[48%] mx-auto h-1/3 p-1 md:p-2 relative">
                      <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover  object-center cursor-pointer"
                      src="/assets/images/gallery7.jpg"
                      fill
                      onClick={() =>
                          handleClick(
                            "/assets/images/gallery7.jpg"
                          )
                        } />
                  </div>
                  <div className="w-[48%] mx-auto h-1/3 p-1 md:p-2 relative">
                      <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover  object-center cursor-pointer"
                      src="/assets/images/gall1.jpeg"
                      fill
                      onClick={() =>
                          handleClick(
                            "/assets/images/gall1.jpeg"
                          )
                        } />
                  </div>
                  <div className="w-[98%] h-[65%] mx-auto p-1 md:p-2 relative">
                      <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover  object-center cursor-pointer"
                      src="/assets/images/gall4.jpeg" 
                      fill
                      onClick={() =>
                          handleClick(
                            "/assets/images/gall4.jpeg"
                          )
                        } />
                  </div>
                </div>
                <div className="flex justify-between w-1/2 flex-wrap sm:w-full">
                  <div className="w-full h-[65%]  p-1 md:p-2 relative">
                    <Image
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover  object-center cursor-pointer"
                    src="/assets/images/gall7.jpeg"
                    fill
                    onClick={() =>
                        handleClick(
                          "/assets/images/gall7.jpeg"
                        )
                      } />
                  </div>
                  <div className="w-[49%]  h-1/3 p-1 md:p-2 relative">
                      <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover  object-center cursor-pointer"
                      src="/assets/images/gall6.jpg"
                      fill
                      onClick={() =>
                          handleClick(
                            "/assets/images/gall6.jpg"
                          )
                        } />
                  </div>
                  <div className="w-[49%]  h-1/3 p-1 md:p-2 relative">
                      <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover  object-center cursor-pointer"
                      src="/assets/images/gallery5.jpg"
                      fill
                      onClick={() =>
                          handleClick(
                            "/assets/images/gallery5.jpg"
                          )
                        } />
                  </div>
                </div>
            </div>
        {/* </div> */}
        <div className={selected ? 'fixed top-0 left-0 w-full h-full z-50 bg-dark':'hidden'}>
            <div className='h-full w-[80%] flex justify-between mx-auto rounded-lg sm:h-[70%] sm:w-[90%] sm:my-[20%] xs:h-[50%] xs:w-full xs:my-[40%]'>
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={selected}
                    />
                </div>
                <div className='text-3xl text-red-500 mt-3 mr-3 ml-1 cursor-pointer sm:-ml-[50px]' onClick={closeModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
                    <line x1="10" y1="10" x2="90" y2="90" stroke="white" strokeWidth="15"/>
                    <line x1="10" y1="90" x2="90" y2="10" stroke="white" strokeWidth="15"/>
                  </svg>
                </div>
            </div>  
        </div>
        <div className='flex justify-between my-32 larg:flex-col larg:items-center '>
          <h1 className={`grotesk text-[#1D3C6A] text-3xl font-[700] larg:text-center mb-10 xs:text-2xl`} >Achievements</h1>
          <div className='flex justify-between w-[60%] larg:w-[90%] xs:w-[100%] xs:flex-col'>
            <div className='flex flex-col items-center xs:mb-9'>
              <GiLaurelsTrophy className='text-gray-700 text-8xl xs:text-6xl'/>
              <h1 className='grotesk text-[18px] font-[600] mb-2 text-[#FF0054] xs:text-[15px]'>Winner</h1>
              <h1 className='text-black grotesk xs:text-[15px]'>Innovation Accelerator phase 2</h1>
              <h1 className='text-black grotesk xs:text-[15px]'>The innovative solution</h1>
            </div>
            <div className='flex flex-col items-center'>
              <GiLaurelsTrophy className='text-gray-700 text-8xl xs:text-6xl'/>
              <h1 className='grotesk text-[18px] font-[600] mb-2 text-[#FF0054] xs:text-[15px]'>Winner</h1>
              <h1 className='text-black grotesk xs:text-[15px]'>Hanga pitchfest 2023</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-32 larg:flex-col larg:items-center'>
          <h1 className={`grotesk text-[#1D3C6A] text-3xl font-[700] w-[30%] larg:w-[90%] larg:text-center mb-10 xs:text-2xl`} >Want to know more about our work ?</h1>
          <div className='flex flex-col w-[60%] larg:w-[90%]'>
            <Link href='https://youtu.be/yEp4qC5mn2g?si=WjmgPjA_nAxcw6q5' className='flex items-center cursor-pointer my-2 hover:underline' passHref target='blank'>
              <LuLink className='text-black text-2xl mr-1 hover:underline xs:text-xl' />
              <h1 className='text-blue-500 text-xl roboto hover:underline xs:text-[15px]'>https://youtu.be/yEp4qC5mn2g?si=WjmgPjA_nAxcw6q5</h1>
            </Link>
            <Link href='https://kura.rw/myths-about-sex-ed-made-her-develop-her-app/' className='flex items-center cursor-pointer my-2 hover:underline' passHref target='blank'>
              <LuLink className='text-black text-2xl mr-1 hover:underline' />
              <h1 className='text-blue-500 text-xl roboto hover:underline xs:text-[15px]'>https://kura.rw/myths-about-sex-ed-made-her-develop-her-app/</h1>
            </Link>
            <Link href='https://en.igihe.com/news/article/150-rwandan-schools-to-receive-sanitary-pad-boxes' className='flex items-center cursor-pointer my-2 hover:underline' passHref target='blank'>
              <LuLink className='text-black text-2xl mr-1 hover:underline' />
              <h1 className='text-blue-500 text-xl roboto hover:underline xs:text-[15px]'>https://en.igihe.com/news/article/150-rwandan-schools-to-receive-sanitary-pad-boxes</h1>
            </Link>
          </div>
        </div>
    </div>
    
  )
}

export default ourWork
