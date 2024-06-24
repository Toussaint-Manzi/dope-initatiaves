import React from 'react';

const Home = () => {
  return (
    <div
      className='w-full h-screen'
      style={{
        backgroundColor: '#F9F0EC',
        backgroundImage: 'url(/assets/images/background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }}
    >
        <div className='w-[60%] mx-auto flex justify-between'>
            <div className='flex flex-col'>
                <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-semibold'>Dope Initiatives</h1>
                <div className='grotesk leading-tight'>
                    <h1 className='text-[70px] text-black font-[600] '>We will</h1>
                    <h1 className='text-[70px] text-black font-[600]'>Increase you sales</h1>
                    <h1 className='text-[70px] text-black font-[600]'>By Three times</h1>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  );
};

export default Home;
