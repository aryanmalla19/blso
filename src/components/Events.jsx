import React from 'react'
import EventCard from './EventCard'

function Events() {
  return (
    <div className='lg:my-12'>
<h1 className='text-4xl my-5 text-center font-poppins font-semibold text-second'>Our Events</h1>
    <div className='flex lg:flex-row flex-col w-11/12 flex-wrap justify-between mx-auto'>
        <EventCard title="Earthquake Project" img="https://www.blsonepal.org.np/uploads/medium/sany0614-dDAqHcy2vDNnMpLQ5tOXJKhpMz92Zid5LAFKmZeG.JPG" message="It was a powerful earthquake measuring 7.8 on the Richter scale that struck the area between Kathmandu and Pokhara at 11:56 local time on Saturday, 25 April 2015." />
        <EventCard title="Agricultures Project with BLSO" img="https://www.blsonepal.org.np/uploads/medium/agricul-2JH5U36gB57ZffTConhh0PmE3NAf489H4tQr4cUk.jpg" message="The Agricultural Development Project, initiated by Better Life Social Organization, aims to uplift Nepalese farmers by providing them with the necessary support, training, and resources." />
        <EventCard title="Family Support Project" img="https://www.blsonepal.org.np/uploads/medium/img-6417-gC5CfQXz1O8pF22XBG5qlcnCM4NhrkjpRtCEgAIP.JPG" message="he Family Support Project aims to empower needy families by providing assistance in various areas, including small business investment, agriculture, livestock, land lease, and equipment support." />
        <EventCard title="Home Guidance Class project" img="https://www.blsonepal.org.np/uploads/medium/home-guding-class-MLXlQWSjBbmJbpLk7i6Ro5xTBR6n1uE9ZnOn5AOh.jpg" message="The Home Guidance Class project, sponsored by Mr. Katsuta Fumitaka Dai, was initiated at Bal Bikash Sumudayik School in Letang-01, Morang." />
        <EventCard title="Volunteer Opportunity Nepal with BLSO" img="https://www.blsonepal.org.np/uploads/medium/volunteer-P26f9wydr3UDGUgfFZ14mHwZjYUgVplGbEX63pXr.jpg" message="Volunteering with Better Life Social Organization (BLSO) Nepal offers a unique opportunity to make a positive impact in the lives of others." />
        <EventCard title="Teacher Training Project" img="https://www.blsonepal.org.np/uploads/medium/img-6815-askk6LbZPIdOEjnQfdDe704FiXLCnrXSVtgF36TK.JPG" message="The goal of this project is to provide teacher training to community-based teachers in Sarlahi, Morang, Jhapa, Panchthar  to improve the quality of education for students in rural communities." />
        <EventCard title="Shoes Distribution Project" img="https://www.blsonepal.org.np/uploads/medium/shoes-2-POcEmWbN0f2twJ2HBkvfHgiohko524sw1lCHPxYp.jpg" message="The goal of this project is to provide teacher training to community-based teachers in Sarlahi, Morang, Jhapa, Panchthar  to improve the quality of education for students in rural communities." />
        <EventCard title="Group Birthday Project" img="https://www.blsonepal.org.np/uploads/medium/birtday-project-FxZvlmv4C6rMe85rMXyLEhYPdo83WIRPA9MXl9R5.jpg" message="The Group Birthday Project recognizes that celebrating birthdays is a cherished experience for many children, but unfortunately, it is a luxury that some underprivileged children do not have." />
        <EventCard title="Tent Provision for 20 Homeless Riverside Families" img="https://www.blsonepal.org.np/uploads/medium/img-1521-H7FbBc4bH3aBvUu0OtBfK4zolWELaIqfhXoBj9XN.JPG" message="The Better Life Social Organization, with the generous donation from Tukumi Katyama, initiated a project to provide tents for 20 homeless families living by the riverside." />
    
    </div>
    </div>
  )
}

export default Events