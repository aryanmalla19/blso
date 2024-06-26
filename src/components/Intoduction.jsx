import React from 'react'

function Intoduction() {
  return (
    <div id='introduction' className='w-11/12 mt-20 lg:mt-0 mx-auto my-4 lg:my-10'>
        <h1 className='text-center text-xl lg:text-3xl lg:mb-4 lg:mt-0 mt-20 text-second'>About Us</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-[48%]'>
            <img className='rounded ' src="https://www.blsonepal.org.np/uploads/medium/istockphoto-1147606821-612x612-IqiPZ2GNBhfL3KGwfpvasoSDEIZYSSqn2z6x5Wjp.jpg" alt="" />
            </div>
            <div className='mt-2 lg:mt-0 lg:w-6/12'>
            <p className='text-sm lg:text-base'>Better Life Social Organization (BLSO Nepal) was established in 2011 by Bhupal Niroula and Dipak Niroula, as a non-profit organization. Presently, Bhupal Niroula is the Founder President and leads the organization, while Dipak Niroula, the former founder, played a crucial role in establishing BLSO Nepal as a leading advocate for social change.</p>
            <p className='text-sm lg:text-base'>BLSO Nepal's primary objective is to provide education, food, and healthcare to homeless children in Nepal, enabling them to meet their basic needs and offering them hope for a better future. The organization envisions a Nepal where every homeless child has the opportunity to reach their full potential and live with dignity. BLSO Nepal works closely with communities, listening to their needs and aspirations, and empowering them to take charge of their own development. Education is key to breaking the cycle of poverty, and BLSO Nepal focuses on providing quality education to all children, especially those who are homeless.</p>
            <p className='text-sm lg:text-base'>BLSO Nepal's programs and initiatives are committed to sustainability and a lasting impact. The organization collaborates with partners and donors to enhance its existing programs and develop new ones that align with its mission. Bhupal Niroula and Dipak Niroula's invaluable contributions as founders have ensured that BLSO Nepal will continue tirelessly to improve the lives of homeless children in Nepal and create lasting change.</p>
            </div>
        </div>
    </div>
  )
}

export default Intoduction