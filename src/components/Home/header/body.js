import React from 'react';
import discont from './discount.svg';
import robo from './robo.png';

export default function Body() {
  return (
    <div className="relative md:flex md:justify-between md:items-start md:mt-36 mt-16 font-poppins ">
      {/* Left Section */}

      
      <div className=" absolute left-[-30%] top-[-70%] w-[600px] hidden md:block h-[800px] bg-gradient-to-b from-transparent to-[#214D76] rounded-full blur-[150px] opacity-100 "></div>

      {/* Left body starts */}

      <div className="md:w-1/2 z-30 w-auto ">
        <div className="bg-neutral-800 rounded-lg flex items-center p-1 w-96  font-normal ">
          <img src={discont} alt="Discount" className=" " />
          <p className="text-gray-500 md:text-base tracking-wider text-sm ">
            <span className="text-slate-100">20%</span> DISCOUNT FOR 
            <span className="text-slate-100"> 1 MONTH </span>ACCOUNT
          </p>
        </div>
        <div className="mt-7 z-10 ">
          <p className="text-slate-100 font-bold md:text-6xl leading-tight  text-4xl">The Next</p>
          <p className="bg-custom-gradient bg-clip-text text-transparent font-bold md:text-6xl leading-tight mt-2 text-4xl">Generation</p>
          <p className="text-slate-100 font-semibold md:text-6xl leading-tight mt-2 text-4xl">Payment Method.</p>
        </div>
        <div className="mt-10 z-30">
          <p className="text-gray-400 md:text-xl text-lg">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
            We examine annual percentage rates, annual fees.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-end z-10 mt-16 md:mt-0">
        <img src={robo} alt="Robo Hand" className="lg:w-9/12 h-full sm:w-full h-full" />
      </div>
      <div className="absolute right-[-10%] hidden md:block bottom-[8%] w-[800px] h-[800px] bg-gradient-to-b from-transparent to-[#214D76] rounded-full blur-[150px] opacity-100 "></div>
    </div>
  );
}