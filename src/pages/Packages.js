import React from 'react';
import Products from '../components/Products';

const Packages = () => {
  return (
    <div className='bg-[#F9F0EC] w-full px-[20%] mx-auto py-32'>
        <div className='flex flex-col items-start self-start mb-20'>
          <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-semibold'>Dope Initiatives</h1>
          <div className='grotesk leading-tight'>
            <h1 className='text-[55px] text-black font-[500] w-[65%]'>Championing reproductive health awareness and access to essential resources.</h1>
          </div>
        </div>
        <Products/>
    </div>
  )
}

export default Packages
