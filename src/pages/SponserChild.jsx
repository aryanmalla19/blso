import React from 'react'
import Sponser from '../components/Sponser'
import Help from '../components/Help'

function SponserChild() {
  const eventData = [
    {
      title: "Earthquake Project",
      img: "https://www.blsonepal.org.np/uploads/medium/sany0614-dDAqHcy2vDNnMpLQ5tOXJKhpMz92Zid5LAFKmZeG.JPG",
      message: "It was a powerful earthquake measuring 7.8 on the Richter scale that struck the area between Kathmandu and Pokhara at 11:56 local time on Saturday, 25 April 2015.",
      category: '1'
    },
    {
      title: "Agricultures Project with BLSO",
      img: "https://www.blsonepal.org.np/uploads/medium/agricul-2JH5U36gB57ZffTConhh0PmE3NAf489H4tQr4cUk.jpg",
      message: "The Agricultural Development Project, initiated by Better Life Social Organization, aims to uplift Nepalese farmers by providing them with the necessary support, training, and resources.",
      category: '2'
    }]
  return (
    <div>
        <Sponser/>
        <div className='bg-wow'>
          <div className='flex lg:flex-row sm:flex-row flex-col w-11/12 flex-wrap justify-between mx-auto'>
        {eventData.map((event, index) => (
          <SponserChild key={index} title={event.title} img={event.img} message={event.message} />
        ))}
      </div>
        <Help/>
        </div>
    </div>
  )
}

export default SponserChild