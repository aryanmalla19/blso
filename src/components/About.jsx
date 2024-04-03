import React from 'react'
import Button from './Button'

function About() {
  return (
    <div className='w-11/12 font-poppins py-10 mx-auto flex justify-evenly'>
        <div className='flex w-6/12 flex-col'>
            <h2 className=' text-xl text-first font-meidum font-lato'>About Us</h2>
            <h1 className='text-2xl text-second font-semibold'>Help People,<br/>Our Main Goals</h1>
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam quos sequi earum, facilis distinctio dicta, quibusdam atque sit sunt recusandae? Cumque maxime aliquam nostrum ea culpa cum illo nobis.lorem Lorem ipsum dolor sit amet consectetuLorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, impedit tempore dolore quas, nostrum at cum ipsum atque corporis, sed animi labore nesciunt in iste suscipit delectus veritatis. Nesciunt, blanditiis!</p>
            <div className='my-2'>
                <Button/>
            </div>
        </div>
        <div className='w-5/12'>
          <img src="https://www.blsonepal.org.np/uploads/medium/istockphoto-1170754176-612x612-QDJPRAtUEEPn9JL7GTbxglrexARMXo1yWCg7I9JW.jpg" alt="" />

        </div>
    </div>
  )
}

export default About