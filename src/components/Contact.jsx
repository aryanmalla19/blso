import React, { useEffect } from 'react'
import { CiMail, CiPhone } from "react-icons/ci";
import Social from './Social';
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    return (
        
        <div className='flex lg:flex-row flex-col my-10 font-poppins justify-between w-11/12 mx-auto'>
            <div className='flex flex-col lg:w-7/12'>
                <h2 className='text-base lg:text-xl font-lato mt-10 lg:mt-0'>Contact</h2>
                <h1 className='text-xl lg:text-3xl font-medium text-second'>Get in Touch With Us</h1>
                <p className='text-sm lg:text-base'>Are you passionate about making a difference community? Do you want to be part of a movement that creates positive change and uplifts the lives of those in need? If so, then we invite you to get in touch with Better Life Social Organization. <br /> <br />
At Better Life, we believe that together, we can make a meaningful impact. Whether you're an individual looking to volunteer your time and skills, a donor eager to support our projects financially, or an organization interested in partnering with us on initiatives, we welcome your involvement. <br /> <br />
Getting in touch with us is easy. Simply reach out to us via email at <span className='text-second font-medium'>info@blsonepal.org.np</span>  or fill out the contact form Our dedicated team will be delighted to hear from you and discuss how you can contribute to our mission. <br /> <br />
No matter how big or small your contribution, your support matters. Together, let's work towards creating a better life for all.
We look forward to connecting with you soon.

</p>
                <div className='flex flex-col'>
                    <div className='flex lg:mt-5'>
                        <div className='bg-second px-2 flex justify-center items-center'>
                            <CiMail className='text-4xl text-white' />
                        </div>
                        <div className='flex flex-col ml-5'>
                            <h2 className='font-medium text-base mb-0 lg:text-xl'>Message</h2>
                            <h1 className='text-gray-500 text-xs lg:text-lg'>info@blsonepal.org.np</h1>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <div className='bg-second px-2 flex justify-center items-center'>
                            <CiPhone className='text-4xl text-white' />
                        </div>  
                        <div className='flex flex-col ml-5'>
                            <h2 className='font-medium text-base mb-0 lg:text-xl'>Contact Us</h2>
                            <h1 className='text-gray-500 text-xs lg:text-lg'>+977 9851091049</h1>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <h1 className='font-medium mt-5 text-xl lg:text-2xl'>Follow us on social media</h1>
                <p className='text-gray-500 mb-0 text-sm lg:text-base'>Stay connected! Follow us on social media to keep up with our latest updates, events, and more.</p>
                <Social />
            </div>
            <div className='lg:w-[40%]'>
                <form className='flex mt-8 flex-col' action="" method="post">
                    <input className='bg-gray-300 pl-3 py-3 my-2' type="text" name="name" id="name" placeholder='Enter your name' />
                    <input className='bg-gray-300 pl-3 py-3 my-2' type="text" name="number" id="number" placeholder='Phone number' />
                    <input className='bg-gray-300 pl-3 py-3 my-2' type="email" name="email" id="email" placeholder='Email address' />
                    <textarea className='bg-gray-300 pl-3 py-3 my-2' name="message" id="message" cols="30" rows="10" placeholder='Your message'></textarea>
                    <input className='bg-second mx-auto mt-2 text-white w-24 rounded-2xl py-1' type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    )
}

export default Contact