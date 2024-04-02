import React from 'react'
import SectionBox from './SectionBox'
import { SlNotebook } from "react-icons/sl";
function Section() {
  return (
    <section id="about" className="py-3 bg-second font-poppins text-white">
        <div className="container aos-init aos-animate" data-aos="fade-up">
  
           <div className="text-center my-2">
            <h2 className=''>Introduction</h2>
            <p className='text-2xl font-semibold mb-1'> BETTER LIFE SOCIAL ORGANIZATION </p>
          </div> 
  
          <div className="row w-10/12 mx-auto text-center justify-content-center">
            <div className="col-lg-10">
            <p>Better Life Social Organization (BLSO Nepal) was established in 2011 by Bhupal Niroula and Dipak Niroula, as a non-profit organization. Presently, Bhupal Niroula is the Founder President and leads the organization, while Dipak Niroula, the former founder, played a crucial role in establishing BLSO Nepal as a leading advocate for social change.</p>
              
            </div>
          
          </div>
          <div className='w-11/12 my-10 mx-auto flex justify-around'>
          <SectionBox logo={<SlNotebook className='text-4xl'/>} name="700" message="project completed" />
          <SectionBox logo={<SlNotebook className='text-4xl'/>} name="700" message="project completed" />
          <SectionBox logo={<SlNotebook className='text-4xl'/>} name="700" message="project completed" />
          <SectionBox logo={<SlNotebook className='text-4xl'/>} name="700" message="project completed" />
          </div>
        </div>
      </section>
  )
}

export default Section