import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
function Social() {
  return (
    <div className='flex text-2xl mt-5'>
        <div className='px-2'>
        <FaInstagram/>
        </div>
        <div className='px-2'>
        <FaFacebook/>
        </div>
        <div className='px-2'>        
        <FaTiktok/>
        </div>
        <div className='px-2'>
        <FaYoutube/> 
        </div>
    </div>
  )
}

export default Social