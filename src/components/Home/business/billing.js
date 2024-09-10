import React from 'react';
import paypal from './images/paypal.png';
import tick from './images/tick.png';
import transfer from './images/last transaction.png';
import appstore from './images/appstore.png';
import gpay from './images/gpay.png';

function Billing() {
  return (

    <div className=" md:flex justify-between  items-start mt-16 md:mt-52 font-poppins">

      {/* Left Section  */}

      <div className='w-[590px] h-[1200px] bg-gradient-to-b from-transparent to-[#214D76] rounded-[100%] absolute z-0 left-[-40%] top-[-80%] opacity-50 blur-[120px]'></div>
      <div className="relative z-10 md:w-[300px] w-[200px] hidden md:block">
        <div className="absolute  left-[60%] bottom-[-200px] z-10 w-full">
          <img src={paypal} alt="Paypal" className="w-full" />
        </div>
        <div className="absolute top-[120px] left-[10px] w-full">
          <img src={transfer} alt="Transaction Details" className="w-full" />
        </div>
        <div className="absolute top-[350px] left-[60%] bg-slate-100 rounded-xl flex items-center p-3 gap-x-2 w-80 ">
          <img src={tick} alt="Success Tick" />
          <p className='text-black'>Great! Your Payment is successfully.</p>
        </div>
      </div>

      {/* Right Section  */}
      <div className='md:w-1/2  md:text-left md:pl-24 md:mt-12  '>
        <p className='text-slate-100 text-3xl md:text-5xl font-bold leading-tight tracking-wider'>
          Easily control your billing & invoicing.
        </p>
        <p className='text-gray-400 text-lg md:text-xl mt-8 leading-relaxed '>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        
        <div className='flex  mt-8 space-x-4'>
          <img src={appstore} alt="App Store" className='h-12'/>
          <img src={gpay} alt="Google Play" className='h-12 '/>
        </div>
      </div>
    </div>
  );
}

export default Billing;
