import React from 'react'
import VolCard from './VolCard'

function MeetVol() {
  return (
    <div className='bg-second'>
        <div className=' mx-auto w-11/12 text-black font-poppins text-center'>

        <h1 className='text-xl pt-5 font-lato text-white'>Team</h1>
        <h1 className='text-3xl font-medium mb-5 text-white'>Meet Our Volunteers</h1>
        <div className='flex justify-between py-16'>
            <VolCard name="Aryan Malla" img="https://www.blsonepal.org.np/uploads/medium/earquke-m1aPchiS4JYJqztTVV0YsJrjX2kAIcor1kEfnnFr.jpg"/>
            <VolCard name="Aryan Malla" img="https://www.blsonepal.org.np/uploads/medium/earquke-m1aPchiS4JYJqztTVV0YsJrjX2kAIcor1kEfnnFr.jpg"/>
            <VolCard name="Aryan Malla" img="https://www.blsonepal.org.np/uploads/medium/earquke-m1aPchiS4JYJqztTVV0YsJrjX2kAIcor1kEfnnFr.jpg"/>
            <VolCard name="Aryan Malla" img="https://www.blsonepal.org.np/uploads/medium/earquke-m1aPchiS4JYJqztTVV0YsJrjX2kAIcor1kEfnnFr.jpg"/>
        </div>
        </div>
    </div>
  )
}

export default MeetVol