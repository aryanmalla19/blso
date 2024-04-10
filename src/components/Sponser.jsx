import React from 'react'
import CustomBox from './CustomBox'

function Sponser() {
    return (
        <div className='flex bg-wow flex-col'>
            <h1 className='text-3xl mt-6 text-center'>SPONSOR A CHILD</h1>
            <div className='flex w-11/12 mx-auto my-5'>
                <div className='w-[25%] flex flex-col'>
                    <div className='flex justify-start'>
                    <img className='w-10/12' src="https://stcodsphotos.imgix.net/12207197_Headshot_2024-04-01-102211.jpg?w=343&h=457&or=1" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h6>Location: Ethiopia</h6>
                        <p>Age: 9</p>
                    </div>
                </div>
                <div className='w-8/12 flex flex-col'>
                    <h1>Meet Wag</h1>
                    <p>Help Wag envision a future they've never known. Your monthly gift of $39 is invested in the lives of children most vulnerable to poverty, inequality and discrimination. Children are remarkably resilient — and with a strong sponsorship community by their sides they can overcome these hardships. Your sponsorship supports community centers in vulnerable areas where skilled teams deliver critical, effective programs to children who need them most. Create lasting change and sponsor today.</p>
                    <CustomBox name="Donate Now" link="/donation" />
                </div>
            </div>
        </div>
    )
}

export default Sponser