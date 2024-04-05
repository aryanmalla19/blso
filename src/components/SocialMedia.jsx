import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube, FaWhatsapp } from "react-icons/fa6";
function SocialMedia() {
    return (
        <div className='fixed z-10 top-0 right-[-2px] flex flex-col justify-center items-center h-screen'>
            <div className='bg-first'>
                <div className='p-3 py-4 flex justify-center cursor-pointer hover: items-center'>
                    <a href="https://www.facebook.com/santosh.bhardhoj" className='text-xl text-white'><FaFacebookF /></a>
                </div>
                <div className='p-3 py-4 flex justify-center cursor-pointer hover: items-center'>
                    <a href='https://www.youtube.com/channel/UCzaypVtCEQVBEc2Ibwn-yGQ' className='text-xl text-white'>
                        <FaYoutube />
                        </a>
                </div>
                <div className='p-3 py-4 flex justify-center cursor-pointer hover: items-center'>
                    <a href='https://api.whatsapp.com/send/?phone=%2B9779851091049&text&type=phone_number&app_absent=0' className='text-xl text-white'>
                        <FaWhatsapp /></a>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia