import React from 'react'
import NeedCard from './NeedCard'

function Need() {
  return (
    <div className='w-11/12 font-poppins mx-auto'>
        <div className='text-center text-second'>
        <h2 className='text-xl font-lato'>What we do</h2>
        <h1 className='text-2xl font-semibold'>We do it for People in Need</h1>
        </div>
        <div className='flex flex-wrap'>
        <NeedCard title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        <NeedCard title="Medicine Help" message="Centuries but also the leap into electronic typesetting, remaining specimen book."/>
        </div>
    </div>
  )
}

export default Need