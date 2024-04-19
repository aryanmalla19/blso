import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
function Message({name,post,message,img}) {
  return (
    <div className=''>
        <div className='w-11/12 mx-auto my-5'>
                <h1 className='text-lg text-center lg:text-2xl my-5'>A Message From Our <span className='text-second'>{post}</span></h1>
                <div className='flex lg:flex-row flex-col bg-wow justify-between'>
                    <div className='lg:w-4/12'>
                        <img src={img} alt="" />
                    </div>
                    <div className='lg:w-[64%] w-11/12 mx-auto lg:pr-3 pt-3 flex flex-col'>
                        <div className='flex justify-end'>
                        <h1 className='text-second text-2xl lg:text-6xl text-right lg:mr-20'><FaQuoteRight/></h1>
                        </div>
                        <h1 className='text-xl lg:text-3xl mb-0 '>{name}</h1>
                        <h1 className='text-base lg:text-3xl text-second'>{post}</h1>
                        {
                            message.map((e)=>{
                                return (
                                    <>
                                    <p className='mb-2 text-sm lg:text-base'>{e.message}</p>
                                    </>
                                )
                            })
                        }
                        <p className='text-sm lg:text-base'>
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