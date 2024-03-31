import React from 'react'
import NeedCard from './NeedCard'
import { FaHandHoldingMedical  } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { MdBabyChangingStation } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";

function Need() {
  return (
    <div className='w-11/12 font-poppins mx-auto'>
        <div className='text-center text-second'>
        <h2 className='text-xl font-lato'>What we do</h2>
        <h1 className='text-2xl font-semibold'>We do it for People in Need</h1>
        </div>
        <div className='flex flex-wrap'>
        <NeedCard logo={<FaHandHoldingMedical/>} title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard logo={<IoWater />} title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard logo={<MdBabyChangingStation/>} title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard logo={<AiOutlineGlobal/>} title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard logo={<MdOutlineCastForEducation/>} title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        </div>
    </div>
  )
}

export default Need