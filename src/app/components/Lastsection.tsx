import React from 'react';
import Image from 'next/image';

import Apple from '@/app/assets/Apple.png';
import Microsoft from '@/app/assets/Microsoft.png';
import Slack from '@/app/assets/Slack.png';
import Google from '@/app/assets/Google.png';

const Lastsection = () => {
  return (
    <div className='top-16 flex flex-col items-center justify-center p-16 sm:p-6'>
      <h1 className='text-[#212529] font-bold text-[64px] sm:text-[32px]'>Our sponsors</h1>
      <div className='flex flex-wrap justify-center items-center gap-28 sm:gap-16 p-20 sm:p-4 cursor-pointer'>
        <Image src={Apple} alt='Apple.png' width={50} height={50} />
        <Image src={Microsoft} alt='Microsoft.png' width={200} height={100} />
        <Image src={Slack} alt='Slack.png' width={200} height={100} />
        <Image src={Google} alt='Google.png' width={200} height={100} />
      </div>
    </div>
  );
};

export default Lastsection;
