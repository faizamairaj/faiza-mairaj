import React from 'react';

const Banner = () => {
  return (
    <div className="py-[100px] px-[20px] lg:py-[140px] lg:px-[220px] top-[92px] bg-[#fff] flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-[600px]">
        <h2 className="font-bold text-[32px] lg:text-[48px] leading-[1.2] tracking-[-0.02em] text-[#212529]">
          Project Management
        </h2>
        <p className="mt-4 font-normal text-base lg:text-lg leading-[1.6] text-[#212529]">
          Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them <br /> to a note.
        </p>
        <div className="mt-6 lg:mt-8">
          <button className="rounded-md px-4 py-2 lg:px-6 lg:py-3 bg-[#4F9CF9] text-white">
            Get Started -&gt;
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[600px] h-[200px] lg:h-[350px] bg-[#C4DEFD] mt-6 lg:mt-0 lg:ml-10 rounded-lg"></div>
    </div>
  );
}

export default Banner;
