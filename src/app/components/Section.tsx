import React from 'react';

const Section = () => {
  return (
    <div className="py-[100px] px-[20px] lg:py-[140px] lg:px-[220px] top-[92px] flex flex-col lg:flex-row items-center mt-20 gap-10 lg:gap-14">
      <div className="w-full lg:w-[600px] h-[200px] lg:h-[350px] bg-[#C4DEFD] rounded-lg mb-8 lg:mb-0"></div>
      <div className="w-full lg:w-[600px]">
        <h2 className="font-bold text-[32px] lg:text-[48px] leading-[1.2] tracking-[-0.02em] text-[#212529]">
          Customise it to<br /> your needs
        </h2>
        <p className="mt-4 font-normal text-base lg:text-lg leading-[1.6] text-[#212529]">
          Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
        </p>
        <div className="mt-6 lg:mt-10">
          <button className="rounded-md px-4 py-2 lg:px-6 lg:py-3 bg-[#4F9CF9] text-[#FFFFFF]">
            Let’s Go -&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
