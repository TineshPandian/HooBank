import React from 'react';
import ppl1 from './images/ppl1.png';
import ppl2 from './images/ppl2.png';
import ppl3 from './images/ppl3.png';
import airbnb from './images/airbnb.png';
import binance from './images/binance.png';
import coinbase from './images/coinbase.png';
import dropbox from './images/dropbox.png';

function Testimonial() {
  return (
    <div className='mt-24 px-10 relative font-poppins'>
         <div className='absolute z-0 right-[-10%] top-[-50%] w-[350px] h-[1200px] bg-gradient-to-b from-transparent to-[#214D76] opacity-55 blur-[150px]'></div>
      <div className='flex justify-between z-10 relative '>
        <p className='text-slate-100 text-5xl font-bold leading-relaxed tracking-wide'>
          What people are <br /> saying about us
        </p>
        <p className='text-gray-400 text-xl mt-14 leading-relaxed pr-12'>
          Everything you need to accept card payments <br /> and grow your business anywhere on the planet.
        </p>
      </div>
      
      <div className='flex justify-evenly mt-20 gap-10 z-10 relative '>
        {/* Testimonial 1 */}
        <div className='bg-greay-gradient rounded-3xl p-6 w-2/3 relative'>
          <p className='bg-custom-gradient bg-clip-text text-transparent font-semibold text-7xl leading-tight mt-2'>"</p>
          <p className='text-slate-100 mt-4'>
            Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
          </p>
          <div className='flex items-center mt-6'>
            <img src={ppl1} alt="Herman Jensen" className='w-10 h-10 rounded-full' />
            <div className='ml-4'>
              <p className='text-slate-100'>Herman Jensen</p>
              <p className='text-slate-400'>Founder & Leader</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className=' rounded-3xl p-6 w-2/3 relative'>
          <p className='bg-custom-gradient bg-clip-text text-transparent font-semibold text-7xl leading-tight mt-2'>"</p>
          <p className='text-slate-100 mt-4'>
            Money makes your life easier. If<br/> you're lucky to have it, you're<br/> lucky.
          </p>
          <div className='flex items-center mt-6'>
            <img src={ppl2} alt="Steve Mark" className='w-10 h-10 rounded-full' />
            <div className='ml-4'>
              <p className='text-slate-100'>Steve Mark</p>
              <p className='text-slate-400'>Founder & Leader</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className=' rounded-3xl p-6 w-2/3 relative'>
          <p className='bg-custom-gradient bg-clip-text text-transparent font-semibold text-7xl leading-tight mt-2'>"</p>
          <p className='text-slate-100 mt-4'>
            It is usually people in the money business, finance, and international trade that are really rich.
          </p>
          <div className='flex items-center mt-6'>
            <img src={ppl3} alt="Kenn Gallagher" className='w-10 h-10 rounded-full' />
            <div className='ml-4'>
              <p className='text-slate-100'>Kenn Gallagher</p>
              <p className='text-slate-400'>Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className='flex justify-evenly mt-28 z-10 relative'>
        <img  src={airbnb} className='h-12'/>
        <img  src={binance} className='h-12'/>
        <img  src={coinbase} className='h-12'/>
        <img  src={dropbox} className='h-12'/>
      </div>

      {/* Bottom section */}
      <div className='bg-greay-gradient rounded-3xl px-28 py-16 mt-28 flex justify-between items-center z-10 relative'>
        <div className=''>
          <p className='text-slate-100 text-5xl font-bold leading-relaxed tracking-wide'>
            Let’s try our service now!
          </p>
          <p className='text-gray-400 text-xl mt-8 leading-relaxed'>
            Everything you need to accept card payments <br/>and grow your business anywhere on the planet.
          </p>
        </div>
        <button className='bg-button-gradient text-black px-5 py-4 font-semibold text-lg w-40 rounded-2xl mt-12'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
