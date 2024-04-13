import React, { useEffect } from 'react'
import CustomBox from './CustomBox'

function AllEvents({ title, img, arr }) {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    console.log(arr)
    return (
        <div className='bg-white  mb-[1px] text-white'>
            <h1 className='text-center pt-10 pb-3 text-black text-xl lg:text-4xl'>{title}</h1>
            <div className='flex flex-col-reverse lg:flex-col'>

                <div className='w-11/12 pb-5 pt-2 justify-between mx-auto flex flex-col lg:flex-row'>

                    <div className="lg:w-6/12 flex">
                        <img className='rounded' src={img} alt="" />
                    </div>
                    <div className="lg:w-[47%] py-3 bg-second rounded-md">
                        <h2 className='my-3 text-xl lg:text-3xl text-center'>Become A Volunteer</h2>
                        <form className='flex w-11/12 mx-auto flex-col' action="" method="post">
                            <input className='pl-3 py-1 lg:py-3 rounded my-2' type="text" name="name" id="name" placeholder='Enter your name' />
                            <input className=' pl-3 py-1 lg:py-3 rounded my-2' type="text" name="number" id="number" placeholder='Phone number' />
                            <input className=' pl-3 py-1 lg:py-3 rounded my-2' type="email" name="email" id="email" placeholder='Email address' />
                            <textarea className=' pl-3 py-1 lg:py-3 rounded my-2' name="message" id="message" cols="30" rows="10" placeholder='Your message'></textarea>
                            <input className='bg-red-500 mx-auto mt-2 text-white w-24 rounded-2xl py-1' type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
                <div className='bg-wow py-5'>

                    <div className="w-11/12 bg-wow flex flex-col py-2 text-black mx-auto">
                        {
                            arr?.map((e) => {
                                return (
                                    <div className='flex flex-col'>
                                        <h1 className='text-base lg:text-2xl'>{e.name}</h1>
                                        <p>{e.message}</p>
                                    </div>
                                )
                            })
                        }


                        <div>
                            <CustomBox name="Donate Now" link="/donation" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllEvents