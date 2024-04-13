import React, { useEffect } from 'react'
import Sponser from '../components/Sponser'
import Help from '../components/Help'
import SponserOtherChild from '../components/SponserOtherChild'
import child1 from '../assets/child1.jpg'
import child2 from '../assets/child2.jpg'
import child3 from '../assets/child3.jpg'
import child4 from '../assets/child4.jpg'
function SponserAnsh() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
}, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    const eventData = [
        {
          title: "Pokharel",
          img: child1,
          message: "Nepal",
          category: '10 years old',
          link:'/sponser-pokhrel'
        },
        {
          title: "Kalawati",
          img: child2,
          message: "Nepal",
          category: '10 years old',
          link:'/sponser-kalawati'
        },
        {
          title: "Tara",
          img: child4,
          message: "Nepal",
          category: '14 years old',
          link:'/sponser-tara',
          saying: [
            {
              "saying":`
              Born In:
              August
              Dream Job:
              Nurse
              SPONSOR TARA
              In rural villages across Nepal, families suffer from chronic poverty. There's little access to health services or nutritious food, and extreme weather events disrupt daily life. Children have to walk miles to reach the nearest school — and early marriage and child labor often keep them out of the classroom.`
            },
            {
              "saying":`Supporters like you are committed to creating a better tomorrow for children not only in this country but all over the world. Your ongoing gift helps give children a healthy start in life, the opportunity to learn and protection from harm. You make it possible for us to partner with children, their communities and local partners. Together, we are transforming their lives and the future we share.`
            },
          ]
        },
        {
            title: "Ansh",
            img: child3,
            message: "Nepal",
            category: '7 years old',
            link:'/sponser-ansh',
            saying: [
                {
                  "saying":`
                  Born In:
                  August
                  Dream Job:
                  Nurse
                  SPONSOR TARA
                  In rural villages across Nepal, families suffer from chronic poverty. There's little access to health services or nutritious food, and extreme weather events disrupt daily life. Children have to walk miles to reach the nearest school — and early marriage and child labor often keep them out of the classroom.`
                },
                {
                  "saying":`Supporters like you are committed to creating a better tomorrow for children not only in this country but all over the world. Your ongoing gift helps give children a healthy start in life, the opportunity to learn and protection from harm. You make it possible for us to partner with children, their communities and local partners. Together, we are transforming their lives and the future we share.`
                },
              ]
          },
      ]
  return (
    <div>
      <Sponser name={eventData[3].title} img={eventData[3].img} location={eventData[3].message} age={eventData[3].category} message={eventData[3].saying}  />
      <div className='bg-wow'>
        <h1 className='text-xl lg:text-4xl pb-5 text-center mb-0 text-second'>Meet Other Children</h1>
        <div className='flex lg:flex-row sm:flex-row flex-col w-11/12 flex-wrap justify-between mx-auto'>
          {eventData.slice(0, 3).map((event, index) => (
            <SponserOtherChild link={event.link} key={index} title={event.title} category={event.category} img={event.img} message={event.message} />
          ))}

        </div>
        <Help />
      </div>
    </div>
  )
}

export default SponserAnsh