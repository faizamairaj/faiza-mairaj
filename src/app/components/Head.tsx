import React from 'react'
import Image from 'next/image';
import circle from '@/app/assets/circle.png'

const Head = () => {
  return (
    <div className='w-full h-[400px] flex items-center px-6 sm:px-10 md:px-28'>
      <div className='w-[300px] sm:w-[400px] md:w-[500px] flex justify-start'>
        <Image src={circle} alt='circle.png' />
      </div>

      <div className='w-full sm:w-[500px] md:w-[600px] ml-4 sm:ml-10 md:ml-20'>
        <h2 className='font-bold text-[36px] sm:text-[40px] md:text-[48px] leading-[1.2] tracking-[-0.02em] text-[#212529]'>
          Work together
        </h2>
        <p className='mt-4 font-normal text-base sm:text-lg md:text-lg leading-[1.6] text-[#212529]'>
          With Whitepace, share your notes with your colleagues and collaborate on them.
          You can also publish a note to the internet and share the URL with others.
        </p>
        <div className='mt-8'>
          <button className='rounded-md px-4 sm:px-6 md:px-6 py-3 bg-[#4F9CF9] text-white'>
            Try it now -&gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Head;
