import React from 'react';
import discont from './discount.svg';
import robo from './robo.png';

export default function Body() {
  return (
    <div className="relative flex justify-between items-start mt-36   ">
      {/* Left Section */}
      <div className=" absolute left-[-30%] top-[-70%] w-[600px] h-[800px] bg-gradient-to-b from-transparent to-[#214D76] rounded-full blur-[150px] opacity-100 z-0"></div>
      <div className="w-1/2 z-10 ">
        <div className="bg-neutral-800 rounded-lg flex items-center p-1 w-96 font-normal ">
          <img src={discont} alt="Discount" className=" " />
          <p className="text-gray-500 text-base tracking-wider ">
            <span className="text-slate-100">20%</span> DISCOUNT FOR 
            <span className="text-slate-100"> 1 MONTH </span>ACCOUNT
          </p>
        </div>
        <div className="mt-7 ">
          <p className="text-slate-100 font-bold text-7xl leading-tight">The Next</p>
          <p className="bg-custom-gradient bg-clip-text text-transparent font-bold text-7xl leading-tight mt-2">Generation</p>
          <p className="text-slate-100 font-semibold text-7xl leading-tight mt-2">Payment Method.</p>
        </div>
        <div className="mt-10">
          <p className="text-gray-400 text-xl w-11/12">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
            We examine annual percentage rates, annual fees.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex justify-end z-10">
        <img src={robo} alt="Robo Hand" className="lg:w-9/12 h-full sm:w-full h-full" />
      </div>
      <div className="absolute right-[-10%] bottom-[8%] w-[800px] h-[800px] bg-gradient-to-b from-transparent to-[#214D76] rounded-full blur-[150px] opacity-100 z-0"></div>
    </div>
  );
}
