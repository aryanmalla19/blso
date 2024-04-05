import React from 'react'
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";
function Social() {
  return (
    <div className='flex text-2xl mt-4'>
       <div className='px-2'>
        <a href="https://www.facebook.com/santosh.bhardhoj">
          <FaFacebook />
        </a>
      </div>
      <div className='px-2'>
        <a href="https://www.youtube.com/channel/UCzaypVtCEQVBEc2Ibwn-yGQ">
          <FaYoutube />
        </a>
      </div>
      <div className='px-2'>
        <a href="https://api.whatsapp.com/send/?phone=%2B9779851091049&text&type=phone_number&app_absent=0">
        <FaWhatsapp />
        </a>
      </div>
      <div className='px-2 text-black'>
        <FaInstagram />
      </div>
    </div>
  )
}

export default Social