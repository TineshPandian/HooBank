import React from 'react'

export default function User() {
  return (
    <div className='font-poppins'>
       {/* User Active */}
       <div className=' flex items-center space-x-9 justify-evenly mt-36'>
        <p className='text-slate-100 text-5xl font-bold'>3800+</p>
        <p className='bg-custom-gradient bg-clip-text text-transparent font-medium text-lg mt-3'>USER ACTIVE</p>
        <p className='text-slate-300 mt-3 '>|</p>
        <p className='text-slate-100 text-5xl font-bold'>230+</p>
        <p className='bg-custom-gradient bg-clip-text text-transparent font-medium text-lg mt-3'>TRUSTED BY COMPANY</p>
        <p className='text-slate-300 mt-3 '>|</p>  
        <p className='text-slate-100 text-5xl font-bold'>$230M+</p>
        <p className='bg-custom-gradient bg-clip-text text-transparent font-medium text-lg mt-3'>TRANSACTION</p>
      </div>
    </div>
  )
}
