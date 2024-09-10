import React from 'react';
import logo from './images/logo.svg';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import linkedin from './images/linkedin.png';
import instagram from './images/instagram.png'

function Footer() {
  return (
    <footer className=" text-white py-16 px-10 mt-28 font-poppins">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className=''> 
          {/* HooBank  */}
          <div className="flex items-center space-x-1    ">
          <img src={logo} alt="HooBank Logo" className="h-20 mb-4" />
            <p className='text-slate-100 text-4xl font-bold pl-3'>Hoo</p>
            <p className='text-4xl font-bold bg-custom-gradient bg-clip-text text-transparent '>
              Bank
            </p>
          </div>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className='ml-16'>
          <p className="text-slate-100 text-xl font-medium mb-4">Useful Links</p>
          <ul className="text-gray-400 space-y-2 text-lg">
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>
        <div className='ml-16'>
          <p className="text-slate-100 text-xl font-medium mb-4">Community</p>
          <ul className="text-gray-400 space-y-2 text-lg">
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>
        <div className='ml-16'>
          <p className="text-slate-100 text-xl font-mediium mb-4">Partner</p>
          <ul className="text-gray-400 space-y-2 text-lg">
            <li>Our Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-16 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-lg">
          Copyright © 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={linkedin} alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
