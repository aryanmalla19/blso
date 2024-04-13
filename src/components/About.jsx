import React from 'react';
import Button from './Button';

function About() {
  return (
    <div id='about' className='w-11/12 font-poppins lg:py-10 mx-auto flex lg:flex-row flex-col justify-evenly'>
        <div className='flex w-full lg:w-6/12 flex-col'>
            <h2 className='text-base lg:text-xl text-first font-meidum font-lato'>About Us</h2>
            <h1 className='text-xl lg:text-2xl text-second font-semibold'>Help People,<br/>Our Main Goals</h1>
            <p className='my-2 lg:text-base text-sm'>BLSO Nepal's primary objective is to provide education, food, and healthcare to homeless children in Nepal, enabling them to meet their basic needs and offering them hope for a better future. The organization envisions a Nepal where every homeless child has the opportunity to reach their full potential and live with dignity. BLSO Nepal works closely with communities, listening to their needs and aspirations, and empowering them to take charge of their own development. Education is key to breaking the cycle of poverty, and BLSO Nepal focuses on providing quality education to all children, especially those who are homeless.</p>
            <div className='my-2'>
                <Button/>
            </div>
        </div>
        <div className='w-full relative overflow-hidden mt-3 lg:mt-0 lg:w-5/12'>
          <div className='w-full h-full overflow-hidden meoww transition-all duration-700 ease-out cursor-pointer' style={{ backgroundImage: "url('https://www.blsonepal.org.np/uploads/medium/istockphoto-1170754176-612x612-QDJPRAtUEEPn9JL7GTbxglrexARMXo1yWCg7I9JW.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>

          </div>
          {/* No need for the <img> tag */}
        </div>
    </div>
  );
}

export default About;
