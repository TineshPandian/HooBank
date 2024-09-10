import logo from  './logo.svg'
import React from "react";

function Nav() {
  return (
    <div className=" flex items-center justify-between  ">
          {/* left navbar*/}
          <div className=" flex items-center space-x-2 z-10  ">
            <img src= {logo}  />
            <p className='text-slate-100 text-lg font-poppins font-semibold'>Hoo<spam className='bg-custom-gradient font-poppins bg-clip-text text-transparent'>Bank</spam></p>
          </div>
          {/* right navbar*/}
          <div >
            <ul className='text-slate-100 hidden md:flex items-center space-x-20 text-lg font-poppins'>
                <li>Home</li>
                <li>AboutUs</li>
                <li>Features</li>
                <li>Solutions</li>
            </ul>
          </div>
    </div>
  );
}

export default Nav;