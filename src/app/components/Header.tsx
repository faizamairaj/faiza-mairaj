import React from 'react'

const Header = () => {
  return (
    <div className='py-10 sm:py-20 md:py-[140px] px-6 sm:px-10 md:px-[220px] top-[92px] bg-[#043873] flex items-center mt-10 sm:mt-20 md:mt-20 h-auto md:h-[450px]'>
      <div className='w-full sm:w-[500px] md:w-[600px]'>
        <h2 className='font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] tracking-[-0.02em] text-[#FFFFFF]'>
          Use as Extension
        </h2>
        <p className='mt-4 font-normal text-base sm:text-lg md:text-lg leading-[1.6] text-[#FFFFFF]'>
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
        </p>
        <div className='mt-6 sm:mt-8 md:mt-10'>
          <button className='rounded-md px-6 py-3 bg-[#4F9CF9] text-[#FFFFFF]'>
            Let’s Go -&gt;
          </button>
        </div>
      </div>

      <div className='w-full sm:w-[500px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[350px] bg-[#C4DEFD] ml-0 sm:ml-6 md:ml-10 rounded-lg mt-6 sm:mt-0'>
      </div>
    </div>
  );
}

export default Header;
