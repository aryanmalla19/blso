import React from 'react'

function Newsletter() {
  return (
    <div className='w-full font-poppins py-10 bg-wow flex justify-center'>
      <div className='w-11/12 lg:w-5/12 flex flex-col justify-center text-center'>
        <h2 className='font-lato text-base lg:text-xl my-1'>Subscribe</h2>
        <h1 className='text-xl lg:text-2xl font-medium mb-4'>Newsletter</h1>
        <p className='text-sm l:text-base'>Don't miss to subscribe to our news feed, Get the latest updates from us!</p>
        <div className='flex items-center flex-col lg:flex-row justify-center my-8'>
         <div className='pkkk lg:pb-0'>
          <input type="text" className='rounded-xl py-2 pr-3 lg:pr-10 pl-5 text-left' placeholder='Enter your email ' name="sub" id="sub" />
         </div>
          
          <div className=' flex items-center lg:mt-0'>
            <input type='submit' value="Send" className='ml-3 mt-2 lg:mt-0 text-white bg-red-500 px-4 lg:px-5 py-1 rounded-2xl' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter