import React from 'react'

function Newsletter() {
  return (
    <div className='w-full font-poppins py-10 bg-wow flex justify-center'>
        <div className='w-5/12 flex flex-col justify-center text-center'>
        <h2 className='font-lato text-xl my-1'>Subscribe</h2>
        <h1 className='text-2xl font-medium mb-4'>Newsletter</h1>
        <p>Save the Children believes every child deserves a future. In the U.S. and around the world, we give children a healthy start in life.</p>
        <div className='flex justify-center my-8'>
            <input type="text" className='rounded-xl py-2 pr-10 pl-5 text-left' placeholder='Enter your email ' name="sub" id="sub" />
            <input type='submit' value="Send" className='ml-3 text-white bg-red-500 px-5 py-1 rounded-2xl'/>
        </div>
        </div>
    </div>
  )
}

export default Newsletter