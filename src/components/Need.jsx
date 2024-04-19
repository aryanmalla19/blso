import React from 'react'
import NeedCard from './NeedCard'
import { FaHandHoldingMedical  } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { MdBabyChangingStation } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
function Need() {
  return (
    <div className='w-11/12 lg:my-16 font-poppins mx-auto'>
        <div className='text-center text-second'>
        <h2 className='text-base lg:text-xl font-lato'>What we do</h2>
        <h1 className='text-xl lg:text-2xl font-semibold'>We do it for People in Need</h1>
        </div>
        <div className='flex sm:flex-row sm:justify-between lg:flex-row flex-col flex-wrap'>
        <NeedCard logo={<FaHandHoldingMedical/>} title="Medicine Help" message="Giving Medicine, Saving Lives, One Treatment at a Time, with Kindness and Care."/>
        <NeedCard logo={<IoWater />} title="Water Delivery" message="Bringing Water, Ending Thirst, Every Drop Counts for Healthier Communities."/>
        <NeedCard logo={<MdBabyChangingStation/>} title="We Care About" message="Showing Love, Offering Support, Everyone Deserves a Helping Hand."/>
        <NeedCard logo={<AiOutlineGlobal/>} title="Spread The World" message="Speak Up, Share Stories, Together We Can Make a Difference, Everywhere."/>
        <NeedCard logo={<MdOutlineCastForEducation/>} title="Education" message="Learning Is Key, Building Dreams, Helping Kids Reach Their Potential, Step by Step."/>
        <NeedCard logo={<FaHandsHelping/>} title="Helping Hand" message="Joining Forces, Making Impact, Together We Lift Each Other, Towards Better Days Ahead."/>
        </div>
    </div>
  )
}

export default Need