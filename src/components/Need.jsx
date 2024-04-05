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
        <div className='flex lg:flex-row flex-col flex-wrap'>
        <NeedCard logo={<FaHandHoldingMedical/>} title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard logo={<IoWater />} title="Water Delivery" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard logo={<MdBabyChangingStation/>} title="We Care About" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard logo={<AiOutlineGlobal/>} title="Spread The World" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard logo={<MdOutlineCastForEducation/>} title="Education" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard logo={<FaHandsHelping/>} title="Helping Hand" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        </div>
    </div>
  )
}

export default Need