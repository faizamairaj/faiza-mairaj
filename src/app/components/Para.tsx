import React from "react";
const Para = () => {
  return (
    <div className='bg-[#043873] w-full h-[300px] top-16 flex flex-col items-center justify-center p-10 sm:p-6 sm:h-[200px]'>
      <h1 className='text-[#FFFFFF] font-bold text-[48px] sm:text-[24px] text-center'>
        Your work, everywhere you are
      </h1>
      <p className='text-[#FFFFFF] text-center p-3 sm:p-1 sm:text-[14px]'>
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and <br /> OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
      </p>
      <button className='rounded-md px-6 py-3 sm:px-4 sm:py-2 bg-[#4F9CF9] text-[#FFFFFF] mt-6 sm:mt-4'>
        Try Taskey -&gt;
      </button>
    </div>
  );
};

export default Para;



