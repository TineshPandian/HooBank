import React from 'react';
import star from './images/star.png';
import secure from './images/secure.png';
import transfer from './images/transfer.png'

function Money() {
  return (
    <div className='md:flex items-center justify-between gap-x-20 items-start mt-36 px-0 md:px-10 font-poppins'>
      {/* Left Content */}
      <div className='md:w-3/5'>
        <p className='text-slate-100 text-3xl md:text-5xl font-bold leading-tight tracking-wide '>
          You do the business,  we'll handle the money.
        </p>
        <p className='text-gray-400 text-lg md:text-xl mt-8 leading-relaxed  '>
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <div className=''>
        <button className='bg-button-gradient  text-black px-5 py-4 font-semibold text-base md:text-lg w-40 rounded-2xl mt-12'>
          Get Started
        </button>
        </div>
      </div>
      
      {/* Right Content */} 
      <div className='md:w-1/2 space-y-12 mt-20 md:m-0'>
        <div className='flex items-start gap-x-4'>
          <img src={star} alt='Star' className='w-16 h-16 mt-2' />
          <div>
            <p className='text-slate-100 text-xl font-semibold'>Rewards</p>
            <p className='text-slate-400  text-base md:text-lg'>
              The best credit cards offer some tantalizing combinations of promotions and prizes.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-x-4 bg-greay-gradient rounded-3xl p-2'>
          <img src={secure} alt='Secure' className='w-16 h-16 mt-2' />
          <div>
            <p className='text-slate-100 text-xl font-semibold'>100% Secured</p>
            <p className='text-slate-400 md:text-lg'>
              We take proactive steps to make sure your information and transactions are secure.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-x-4'>
          <img src={transfer} alt='Balance Transfer' className='w-16 h-16 mt-2' />
          <div>
            <p className='text-slate-100 text-xl font-semibold'>Balance Transfer</p>
            <p className='text-slate-400 md:text-lg'>
              A balance transfer credit card can save you a lot of money in interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Money;
