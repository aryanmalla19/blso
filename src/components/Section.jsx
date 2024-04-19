import React from 'react'
import SectionBox from './SectionBox'
import { SlNotebook } from "react-icons/sl";
import { FaRegSmile } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
function Section() {
  return (
    <section id="about" className="py-3 mb-5 bg-second font-poppins text-white">
        <div className="container aos-init aos-animate" data-aos="fade-up">
  
           <div className="text-center pt-6 my-2">
            <h2 className='text-lg lg:text-2xl'>Introduction</h2>
            <p className='text-xl lg:text-2xl font-semibold mb-1'> BETTER LIFE SOCIAL ORGANIZATION </p>
          </div> 
  
          <div className="row text-sm md:text-base w-full md:w-10/12 mx-auto text-center justify-content-center">
            <div className="col-lg-10">
            <p>Better Life Social Organization (BLSO Nepal) was established in 2011 by Bhupal Niroula and Dipak Niroula, as a non-profit organization. Presently, Bhupal Niroula is the Founder President and leads the organization, while Dipak Niroula, the former founder, played a crucial role in establishing BLSO Nepal as a leading advocate for social change.</p>
              
            </div>
          
          </div>
          <div className='my-10 mx-auto flex lg:flex-row flex-wrap justify-around'>
          <SectionBox logo={<SlNotebook className='group-hover:text-white text-4xl'/>} name="700+" message="PROJECT COMPLETED" />
          <SectionBox logo={<FaRegSmile className='group-hover:text-white text-4xl'/>} name="3000" message="FAMILY SETTLED" />
          <SectionBox logo={<FaHeadphones className='group-hover:text-white text-4xl'/>} name="13" message="WORKING YEARS" />
          <SectionBox logo={<BsPeople className='group-hover:text-white text-4xl'/>} name="5000" message="PEOPLE HOUSED" />
          </div>
        </div>
      </section>
  )
}

export default Section