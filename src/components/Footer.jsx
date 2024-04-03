import React from 'react'
import logo from '../assets/logo.png'
import Social from './Social'
function Footer() {
  return (
    <div className='bg-second font-poppins'>
      <div className='w-9/12  flex justify-between py-10 mx-auto'>
        <div className='w-4/12 flex flex-col'>
          <div className='flex justify-center'>
            <img className='w-8/12' src={logo} alt="logo" />
          </div>
          <p className='mb-0 mt-3 pb-0'>Care about people to transforming their lives
            and exudes a positives Impressiono believe. fundraising
            NGO organizations.
          </p>
          <div className='flex justify-center'>
          <Social/>
          </div>
        </div>
        <div className='w-7/12 bg-third mt-5 justify-around pt-5 text-white flex'>
          <ul>
            <h1 className='text-xl'>Get Involved</h1>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
          <ul>
            <h1 className='text-xl'>Get Involved</h1>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
          <ul>
            <h1 className='text-xl'>Get Involved</h1>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <h1 className='text-white bg-second mb-0 py-3 text-xl text-center border-t border-white'>© Copyright Better Life Social Organization . All Rights Reserved</h1>
    </div>
  )
}

export default Footer