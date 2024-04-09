import React from 'react'
import { TiTick } from "react-icons/ti";
function MissionGoal() {
    return (
        <div className='flex w-11/12 mx-auto lg:w-full lg:flex-row flex-col justify-evenly my-10'>
            <div className='flex flex-col lg:w-5/12'>
                <h1 className='text-xl text-center lg:text-left lg:text-4xl mb-3 text-second font-medium'>
                    Our Goal
                </h1>
                <p className='text-sm lg:text-base'> We seek to collaborate with local communities, government bodies, NGOs, and other stakeholders to amplify our impact and ensure the sustainability of our programs. Our objective is to build strong partnerships, share resources, and work collectively towards the betterment of vulnerable children in Nepal. </p>
                <div className='flex flex-wrap'>
                    <div className='flex bg-second py-2 rounded-xl my-1 lg:my-2 px-3 text-white items-center mr-1'>
                        <div className='text-2xl lg:text-3xl mt-[-2px]'>
                            <TiTick />
                        </div>
                        <p className='mb-0 pb-0 text-sm lg:text-base'>Make Donation</p>
                    </div>
                    <div className='flex bg-second py-2 rounded-xl my-1 lg:my-2 px-3 text-white items-center mr-1'>
                        <div className='text-2xl lg:text-3xl mt-[-2px]'>
                            <TiTick />
                        </div>
                        <p className='mb-0 pb-0 text-sm lg:text-base'>Become A Volunteer</p>
                    </div>
                    <div className='flex bg-second py-2 my-1 lg:my-2 rounded-xl px-3 mt-2 text-white items-center mr-1'>
                        <div className='text-2xl lg:text-3xl mt-[-2px]'>
                            <TiTick />
                        </div>
                        <p className='mb-0 pb-0 text-sm lg:text-base'>Food For Poor People dayle</p>
                    </div>
                    <div className='flex bg-second my-1 lg:my-2 py-2 rounded-xl px-3 text-white items-center mr-1'>
                        <div className='text-2xl lg:text-3xl mt-[-2px]'>
                            <TiTick />
                        </div>
                        <p className='mb-0 pb-0 text-sm lg:text-base'>Education For All</p>
                    </div>
                </div>
                <p className='mt-4 text-sm lg:text-base'>Our primary objective is to provide comprehensive access to quality education for vulnerable children. We strive to ensure that every child has the opportunity to attend school, acquire essential knowledge and skills, and develop the confidence to pursue their dreams. Through the pursuit of these objectives, the Better Life Social Organization envisions a Nepal where all vulnerable children have the opportunity to overcome their challenges, access education and healthcare, have their basic needs met, acquire essential skills, and ultimately lead fulfilling lives with dignity and hope for the future.</p>
            </div>
            <div className='flex flex-col lg:w-5/12 mb-14'>
                <h1 className='text-xl text-center lg:text-left lg:text-4xl mb-3 text-second font-medium'>Our Mission</h1>
                <p className='text-sm lg:text-base'>A Nepal where all vulnerable children have the opportunity to overcome their challenges, reach their full potential, and live fulfilling lives with dignity and hope for the future. To empower vulnerable children in Nepal who are orphaned, victims of conflict, or living in extreme poverty by providing comprehensive access to education, healthcare, basic needs, and skill training.</p>
                <div className='relative'>
                    <img className='rounded' src="https://www.blsonepal.org.np/uploads/medium/volunteer-P26f9wydr3UDGUgfFZ14mHwZjYUgVplGbEX63pXr.jpg" alt="" />
                    <div className='flex absolute bottom-[-50px] left-[20%] lg:left-[30%] text-white justify-center items-center flex-col w-[190px] lg:w-[250px] px-3 py-2 lg:py-4 bg-second'>
                        <h2 className='text-xl lg:text-3xl'>20000+</h2>
                        <p className='text-sm lg:text-base'>Thousand people helped</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionGoal