import React from 'react';

const Hero = () => {
  return (
    <div className="py-10 px-4 md:py-[140px] md:px-[220px] top-[92px] bg-[#043873] flex flex-col md:flex-row items-center">
      <div className="w-full md:w-[600px] text-center md:text-left">
        <h2 className="font-bold text-2xl md:text-[48px] leading-[1.2] tracking-[-0.02em] text-white">
          Get More Done with Whitepace
        </h2>
        <p className="mt-4 font-normal text-base md:text-lg leading-[1.6] text-white">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
        </p>
        <div className="mt-6 md:mt-8">
          <button className="rounded-md px-6 py-3 bg-[#4F9CF9] text-white">
            Try Whitepace Free -&gt;
          </button>
        </div>
      </div>

      <div className="w-full md:w-[600px] h-[200px] md:h-[350px] bg-[#C4DEFD] mt-8 md:mt-0 md:ml-10 rounded-lg">
      </div>
    </div>
  );
};

export default Hero;
