import React from 'react'
import Social from './Social'

function VolCard({img,name}) {
  return (
    <div className='flex flex-col w-[24%]'>
        <img src={img} alt="" />
        <h1 className='text-xl pt-2 text-center'>{name}</h1>
        <div className='flex justify-center'>    
            <Social/>
        </div>
    </div>
  )
}

export default VolCard