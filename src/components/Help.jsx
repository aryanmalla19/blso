import React from 'react'
import CustomBox from './CustomBox'
import photo from '../assets/family-support.jpg'
function Help() {
    return (
        <div className='flex font-poppins flex-col py-10 w-11/12 lg:w-10/12 mx-auto'>
    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
      <path fill="#DA1868" d="M7.018,28.001l-5.933-7.239c0,0,17.696-2.112,23.427,8.043C24.511,28.805,17.473,25.086,7.018,28.001z"/>
      <polygon fill="#DA1868" points="14.659,9.602 19.384,13.824 22.199,21.365 15.462,15.483 "/>
      <path fill="#DA1868" d="M40.6,14.075c0,0,2.463,1.409,4.524,2.062l-12.218,8.556C32.906,24.692,37.784,19.907,40.6,14.075z"/>
      <path fill="#1B77BB" d="M31.651,29.509c0,0,15.734-9.753,18.349,1.106c0,0-0.532,6.593-7.038,3.47  C40.212,32.763,36.375,29.658,31.651,29.509z"/>
      <path fill="#7FB342" d="M31.047,3.569c0,0-12.366-2.414-2.916,23.225c0,0,0.704-5.429,5.731-12.719  C33.862,14.075,39.594,4.875,31.047,3.569z"/>
      <path fill="#7FB342" d="M26.422,32.524c0,0-8.144,1.006-13.624,14.479l8.395-2.011C21.193,44.992,20.188,37.552,26.422,32.524z"/>
      <ellipse transform="matrix(0.9456 -0.3253 0.3253 0.9456 -9.4453 7.0597)" fill="#1777BB" cx="16.391" cy="31.778" rx="3.888" ry="2.196"/>
    </svg> */}
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
                    <img src={photo} alt="" />
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