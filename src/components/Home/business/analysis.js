import React from 'react'
import c1 from './images/circle1.png';
import c2 from './images/circle2.png';
import c3 from './images/circle3.png';
import finger from './images/scan.png';
import analys from './images/analysis.png';
import payment from './images/payment.png';

function Analysis() {
  return (
    <div className='flex justify-between items-start mt-40 px-10 relative font-poppins'>
      {/* Left Content */}
      <div className='w-3/5'>
        <p className='text-slate-100 text-5xl font-bold leading-tight tracking-wide'>
          Find a better card deal <br /> in few easy steps.
        </p>
        <p className='text-gray-400 text-xl mt-8 leading-relaxed'>
          Arcu tortor, purus in mattis at sed integer faucibus. <br />
          Aliquet quis aliquet eget mauris tortor. <br />
          Aliquet ultrices ac, ametau.
        </p>
        <button className='bg-button-gradient text-black px-5 py-4 font-semibold text-lg w-40 rounded-2xl mt-12'>
          Get Started
        </button>
      </div>

      {/* Right Content */}
      <div className='relative w-2/5 h-[500px]'>
        {/* Large Circle */}
        <img src={c1} alt="circle1" className='absolute  left-[0px] w-[400px] h-[400px]' />
        
        {/* Medium Circle */}
        <img src={c2} alt="circle2" className='absolute top-[50px] left-[50px] w-[300px] h-[300px]' />
        
        {/* Small Circle */}
        <img src={c3} alt="circle3" className='absolute top-[100px] left-[100px] w-[200px] h-[200px]' />

        {/* Scan Credit Card Icon */}
        <div className='absolute top-[90px] left-[-50px]'>
          <img src={finger} alt="scan" className='w-[180px] h-[150px]' />
          
        </div>

        {/* Online Analysis Card */}
        <div className='absolute top-[50px] left-[210px]'>
          <img src={analys} alt="analysis" className='w-full h-full' />
        </div>

        {/* Payment Method Icons */}
        <div className='absolute top-[320px] left-[70px]'>
          <img src={payment} alt="payment" className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}

export default Analysis;
