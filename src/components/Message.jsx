import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
import bipual from '../assets/bhupal.jpg'
function Message() {
  return (
    <div className=''>
        <div className='w-11/12 mx-auto mt-5'>
                <h1 className='text-xl lg:text-2xl my-5'>A Message From Our <span className='text-second'>Founder</span></h1>
                <div className='flex bg-wow justify-between'>
                    <div className='w-4/12'>
                        <img src="https://sunway.edu.np/wp-content/uploads/2022/08/bigyan-shrestha.jpg" alt="" />
                    </div>
                    <div className='w-[63%] pt-3 flex flex-col'>
                        <div className='flex justify-end'>
                        <h1 className='text-second text-6xl text-right mr-20'><FaQuoteRight/></h1>
                        </div>
                        <h1 className='text-xl lg:text-3xl mb-0 '>Bhupal Niroula</h1>
                        <h1 className='text-xl lg:text-3xl text-second'>Founder</h1>
                        <p>
                        Namaste All,
Since 2009, I have dedicated myself to social work, striving to provide support to the homeless, orphanages, and underprivileged children in need. Throughout this journey, I have witnessed the struggles faced by those who lack access to basic necessities, especially education. Additionally, I have been actively involved in providing aid during emergencies such as earthquakes, floods, and other natural disasters.
<br /> <br />However, it is with a heavy heart that I must share our current challenge. Like many organizations, we are facing financial difficulties and are operating with limited resources. Despite this, our commitment to the well-being of children and the success of our projects remains unwavering. <br />Therefore, I humbly appeal to you all for your support. Together, we can make a real difference in the lives of those who are not able to attend school and those affected by natural disasters. By joining forces with Better Life Social Organization, we can work towards improving education, agriculture, and healthcare for our communities. <br /> <br />Your support, whether through donations, volunteerism, or partnerships, will have a profound impact and greatly contribute to the success of our organization. Together, we can bring about positive change and enhance the value of our efforts.
Thank you for considering this appeal and for your continued support. Let us come together to create a brighter and more promising future for all.
 <br /> <br />
 With gratitude, <br />
<span className='text-second'>Bhupal Niroula</span> <br /> Founder, <br /> <span className='text-second'>Better Life Social Organization</span>

                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Message