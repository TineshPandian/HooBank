import React from 'react'
import c1 from './images/circle1.png';
import c2 from './images/circle2.png';
import c3 from './images/circle3.png';
import finger from './images/scan.png';
import analys from './images/analysis.png';
import payment from './images/payment.png';

function Analysis() {
  return (
    <div className='md:flex justify-between items-start mt-40 px-0 md:px-10 relative font-poppins'>
      {/* Left Content */}
      <div className='md:w-2/5 md:mt-10'>
        <p className='text-slate-100 text-3xl md:text-5xl font-bold leading-tight tracking-wide'>
          Find a better card deal  in few easy steps.
        </p>
        <p className='text-gray-400 md:text-xl text-lg mt-8 leading-relaxed'>
          Arcu tortor, purus in mattis at sed integer faucibus. 
          Aliquet quis aliquet eget mauris tortor. 
          Aliquet ultrices ac, ametau.
        </p>
        <button className='bg-button-gradient text-black px-5 py-4 font-semibold text-base md:text-lg w-40 rounded-2xl mt-12'>
          Get Started
        </button>
      </div>

      {/* Right Content */}
      <div className='relative md:w-2/5 h-[500px] md:mt-0 mt-16 hidden md:block'>
        
        <img src={c1} alt="circle1" className='absolute  md:left-[0px] md:top-0 md:w-[400px] md:h-[400px] left-[25%] top-[90px] ' />
        <img src={c2} alt="circle2" className='absolute md:top-[50px] md:left-[50px] md:w-[300px] md:h-[300px] right-[2%] top-[10%] h-[220px] '/>
        <img src={c3} alt="circle3" className='absolute md:top-[100px] md:left-[100px] md:w-[200px] md:h-[200px] right-[10%] h-[320px] ' />
        <div className='absolute md:top-[90px] md:left-[-50px] top-[40px] left-[-60px]'>
          <img src={finger} alt="scan" className='md:w-[180px] md:h-[150px] w-[120px]' />
        </div>
        <div className='absolute md:top-[50px] md:left-[210px] left-[110px]'>
          <img src={analys} alt="analysis" className='md:w-full md:h-full w-[140px]' />
        </div>
        <div className='absolute md:top-[320px] md:left-[70px] top-[225px] left-[25px]'>
          <img src={payment} alt="payment" className='md:w-full md:h-full w-[170px] ' />
        </div>
      </div>
    </div>
  )
}

export default Analysis;
