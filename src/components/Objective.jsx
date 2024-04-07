import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { FaHospitalAlt } from "react-icons/fa";
import { FaHandHoldingHand } from "react-icons/fa6";
function Objective() {
    return (
        <div className='bg-second text-white'>
            <h1 className='text-center py-3'>Objectives</h1>
            <div className='flex flex-col lg:flex-row w-11/12 pb-5 mx-auto justify-between'>
                <div className='w-full lg:w-[48%]'>
                    <img className='rounded ' src="https://www.blsonepal.org.np/uploads/medium/istockphoto-1170754176-612x612-QDJPRAtUEEPn9JL7GTbxglrexARMXo1yWCg7I9JW.jpg" alt="" />
                </div>
                <div className='lg:w-6/12'>
                    <div className='flex mt-3 lg:mt-0 flex-col'>
                        <div className='flex w-full'>
                            <h3 className='text-base lg:text-xl'>Education</h3>
                            <MdCastForEducation className='text-2xl lg:text-3xl ml-4' />
                        </div>
                        <p className='text-sm mb-0 lg:text-base'>Our primary objective is to provide comprehensive access to quality education for vulnerable children. We strive to ensure that every child has the opportunity to attend school, acquire essential knowledge and skills, and develop the confidence to pursue their dreams.</p>
                    </div>
                    <div className='flex mt-3 lg:mt-0 flex-col'>
                        <div className='flex w-full'>
                            <h3 className='text-base lg:text-xl'>Healthcare</h3>
                            <FaHospitalAlt className='text-2xl lg:text-3xl ml-4' />
                        </div>
                        <p className='text-sm mb-0 lg:text-base'>We are committed to improving the health and well-being of vulnerable children by ensuring access to essential healthcare services. Our objective is to provide regular medical check-ups, vaccinations, and necessary treatments, addressing both physical and mental health needs.</p>
                    </div>
                    <div className='flex mt-3 lg:mt-0 flex-col'>
                        <div className='flex w-full'>
                            <h3 className='text-base lg:text-xl'>Empowerment</h3>
                            <FaHandHoldingHand className='text-2xl lg:text-3xl ml-4' />
                        </div>
                        <p className='text-sm mb-0 lg:text-base'>Our objective is to empower vulnerable children by fostering their self-esteem, resilience, and confidence. We aim to create a supportive environment where children feel valued, respected, and encouraged to voice their opinions. By promoting their rights and advocating for their well-being, we strive to empower them to become active agents of change.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Objective