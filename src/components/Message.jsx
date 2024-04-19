import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
function Message({name,post,message,img}) {
  return (
    <div className=''>
        <div className='w-11/12 mx-auto mt-5'>
                <h1 className='text-xl lg:text-2xl my-5'>A Message From Our <span className='text-second'>{post}</span></h1>
                <div className='flex bg-wow justify-between'>
                    <div className='w-4/12'>
                        <img src={img} alt="" />
                    </div>
                    <div className='w-[63%] pt-3 flex flex-col'>
                        <div className='flex justify-end'>
                        <h1 className='text-second text-6xl text-right mr-20'><FaQuoteRight/></h1>
                        </div>
                        <h1 className='text-xl lg:text-3xl mb-0 '>{name}</h1>
                        <h1 className='text-xl lg:text-3xl text-second'>{post}</h1>
                        {
                            message.map((e)=>{
                                return (
                                    <>
                                    <p className='mb-2'>{e.message}</p>
                                    </>
                                )
                            })
                        }
                        <p className='text-right pr-10'>
 With gratitude, <br />
<span className='text-second'>{name}</span> <br /> {post}, <br /> <span className='text-second'>Better Life Social Organization</span>
                        </p>

                        
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Message