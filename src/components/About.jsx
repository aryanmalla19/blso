import React from 'react'
import Button from './Button'

function About() {
  return (
    <div className='w-11/12 font-poppins py-10 mx-auto flex justify-evenly'>
        <div className='flex w-6/12 flex-col'>
            <h2 className=' text-xl text-first font-meidum font-lato'>About Us</h2>
            <h1 className='text-2xl text-second font-semibold'>Help People,<br/>Our Main Goals</h1>
            <p className='my-2'>BLSO Nepal's primary objective is to provide education, food, and healthcare to homeless children in Nepal, enabling them to meet their basic needs and offering them hope for a better future. The organization envisions a Nepal where every homeless child has the opportunity to reach their full potential and live with dignity. BLSO Nepal works closely with communities, listening to their needs and aspirations, and empowering them to take charge of their own development. Education is key to breaking the cycle of poverty, and BLSO Nepal focuses on providing quality education to all children, especially those who are homeless.</p>
            <div className='my-2'>
                <Button/>
            </div>
        </div>
        <div className='w-5/12'>
          <img className='rounded' src="https://www.blsonepal.org.np/uploads/medium/istockphoto-1170754176-612x612-QDJPRAtUEEPn9JL7GTbxglrexARMXo1yWCg7I9JW.jpg" alt="" />

        </div>
    </div>
  )
}

export default About