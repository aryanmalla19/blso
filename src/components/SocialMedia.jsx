import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
function SocialMedia() {
    return (
        <div className='fixed z-10 top-0 right-[-2px] flex flex-col justify-center items-center h-screen'>
            <div className='bg-first'>
                <div className='p-3 py-4 flex justify-center cursor-pointer hover: items-center'>
                    <a href="https://www.facebook.com/" className='text-xl text-white'><FaFacebookF /></a>
                </div><div className='p-3 py-4 flex justify-center cursor-pointer hover: items-center'>
                    <a href='https://www.instagram.com//' className='text-xl text-white'><FaInstagram /></a>
                </div><div className='p-3 py-4 flex justify-center cursor-pointer hover: items-center'>
                    <a href='#h' className='text-xl text-white'><FaTiktok /></a>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia