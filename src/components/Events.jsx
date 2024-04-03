import React from 'react'
import EventCard from './EventCard'

function Events() {
  return (
    <div className='my-12'>
<h1 className='text-4xl my-5 text-center font-poppins font-semibold text-second'>Our Events</h1>
    <div className='flex w-11/12 flex-wrap justify-between mx-auto'>
        <EventCard title="Earthquake Project" img="https://www.blsonepal.org.np/uploads/medium/earthquick-p0ZnHNYM8SFdjAjIU9aKM2xilLT4DvmjkPfA5KHt.jpg" message="It was a powerful earthquake measuring 7.8 on the Richter scale that struck the area between Kathmandu and Pokhara at 11:56 local time on Saturday, 25 April 2015." />
        <EventCard title="Earthquake Project" img="https://www.blsonepal.org.np/uploads/medium/earthquick-p0ZnHNYM8SFdjAjIU9aKM2xilLT4DvmjkPfA5KHt.jpg" message="It was a powerful earthquake measuring 7.8 on the Richter scale that struck the area between Kathmandu and Pokhara at 11:56 local time on Saturday, 25 April 2015." />
        <EventCard title="Earthquake Project" img="https://www.blsonepal.org.np/uploads/medium/earthquick-p0ZnHNYM8SFdjAjIU9aKM2xilLT4DvmjkPfA5KHt.jpg" message="It was a powerful earthquake measuring 7.8 on the Richter scale that struck the area between Kathmandu and Pokhara at 11:56 local time on Saturday, 25 April 2015." />
        <EventCard title="Earthquake Project" img="https://www.blsonepal.org.np/uploads/medium/earthquick-p0ZnHNYM8SFdjAjIU9aKM2xilLT4DvmjkPfA5KHt.jpg" message="It was a powerful earthquake measuring 7.8 on the Richter scale that struck the area between Kathmandu and Pokhara at 11:56 local time on Saturday, 25 April 2015." />
    </div>
    </div>
  )
}

export default Events