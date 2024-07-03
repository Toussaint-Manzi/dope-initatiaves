import { useState } from 'react'
import Image from 'next/image'

const ourWork = () => {

    const [ selected,setSelected ] = useState(null);

    const handleClick = (imageUrl) => {
        setSelected(imageUrl);
    }

    const closeModal = () =>{
        setSelected(null);
    }

  return (
    <div className='w-full px-[20%] pb-48 bg-[#F9F0EC] pt-[150px] h-screen xl:px-[10%] xs:px-5'>
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
    </div>
    
  )
}

export default ourWork
