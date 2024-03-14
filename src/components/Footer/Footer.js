import React from 'react'

const Footer = () => {
  return (
    <div className='flex h-38 justify-between shadow-lg p-4'>
        <div className='text-xs font-semibold'>2019 @ Jobsforher</div>
        <div className='flex space-x-3 sm:space-x-8'>
            <div className='text-xs font-semibold'>About Us</div>
            <div className='text-xs font-semibold'>Pricing</div>
            <div className='text-xs font-semibold'>FAQ's</div>
        </div>
    </div>
  )
}

export default Footer;
