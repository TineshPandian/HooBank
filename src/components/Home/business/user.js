import React from 'react'

export default function User() {
  return (
    <div className='font-poppins'>
      {/* User Active */}
      <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-evenly space-y-8 sm:space-y-0 sm:space-x-9 mt-20 sm:mt-36 text-center sm:text-left'>
        {/* User Count */}
        <div className='flex flex-col items-center sm:items-start'>
          <p className='text-slate-100 text-4xl sm:text-5xl font-bold'>3800+</p>
          <p className='bg-custom-gradient bg-clip-text text-transparent font-medium text-base sm:text-lg mt-1 sm:mt-3'>USER ACTIVE</p>
        </div>
        {/* Divider for larger screens */}
        <div className='hidden sm:block text-slate-300 mt-3'>|</div>
        {/* Trusted by Company */}
        <div className='flex flex-col items-center sm:items-start'>
          <p className='text-slate-100 text-4xl sm:text-5xl font-bold'>230+</p>
          <p className='bg-custom-gradient bg-clip-text text-transparent font-medium text-base sm:text-lg mt-1 sm:mt-3'>TRUSTED BY COMPANY</p>
        </div>
        {/* Divider for larger screens */}
        <div className='hidden sm:block text-slate-300 mt-3'>|</div>
        {/* Transaction Amount */}
        <div className='flex flex-col items-center sm:items-start'>
          <p className='text-slate-100 text-4xl sm:text-5xl font-bold'>$230M+</p>
          <p className='bg-custom-gradient bg-clip-text text-transparent font-medium text-base sm:text-lg mt-1 sm:mt-3'>TRANSACTION</p>
        </div>
      </div>
    </div>
  )
}
