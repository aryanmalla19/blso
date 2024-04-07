import React from 'react'
import CustomBox from './CustomBox'

function Help() {
    return (
        <div className='flex font-poppins flex-col my-10 w-11/12 lg:w-10/12 mx-auto'>
            <div className='flex lg:flex-row flex-col  justify-between mb-10'>
                <div className='flex lg:mr-10 lg:w-6/12 flex-col'>
                    <h1 className='text-base lg:text-xl font-medium font-lato mb-0'>Help First</h1>
                    <h1 className='text-xl lg:text-2xl text-second font-medium lg:my-2'>Let's Help Together</h1>
                    <p className='mb-8 text-sm lg:text-base'>Better Life Social Organization, a nonprofit dedicated to making a positive impact in the lives of those in need. We believe that every individual deserves a chance to lead a better life, and with your support, we can bring about remarkable change together. Our organization works tirelessly to uplift marginalized communities by providing access to education, healthcare, clean water, and essential resources. With your donation, we can continue to create sustainable solutions that empower individuals and help break the cycle of poverty.</p>
                    <div>
                    <CustomBox name="Call :   +977 9851091049" />
                    </div>
                </div>
                <div className='w-full mt-4 lg:mt-0 lg:w-6/12'>
                    <img src='https://i.pinimg.com/564x/31/a4/9e/31a49e16fe7c3a62dbac8a831b95cdbe.jpg' alt="" />
                </div>
            </div>
            <div className='flex lg:flex-row flex-col-reverse justify-between'>
                <div className='lg:w-6/12 lg:mr-10'>
                    <img src='https://i.pinimg.com/564x/df/34/bd/df34bd5438de6a9cca99dd9c8d21fbf2.jpg' alt="" />
                </div>
                <div className='flex lg:w-6/12 flex-col'>
                    <h1 className='text-xl lg:text-2xl text-second font-medium my-2'>More People More impact</h1>
                    <p className='text-sm lg:text-base'>We are committed to promoting sustainable practices that protect the environment and foster long-term prosperity. By contributing to Better Life, you support initiatives such as clean energy projects, eco-friendly farming practices, and waste management programs, helping us create a greener, more sustainable future for all. When disasters strike, Better Life is there to provide immediate relief to affected communities. By donating, you help us respond swiftly to natural disasters, conflict situations, and other emergencies, ensuring that those impacted receive essential supplies, shelter, and support when they need it most.</p>
                </div>
            </div>
        </div>
    )
}

export default Help