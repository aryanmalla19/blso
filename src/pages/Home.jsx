import React from 'react'
import SocialMedia from '../components/SocialMedia'
import Carousel from '../components/Carousal'
import Section from '../components/Section'
import About from '../components/About'
import Need from '../components/Need'
import Newsletter from '../components/Newsletter'
import Events from '../components/Events'
import MissionGoal from '../components/MissionGoal'
import JoinVolunteer from '../components/JoinVolunteer'
import SponserOtherChild from '../components/SponserOtherChild'
import child1 from '../assets/child1.jpg'
import child2 from '../assets/child4.jpg'
import child3 from '../assets/child3.jpg'
import Reveal from '../components/Reveal'
const eventData = [
  {
    title: "Pokharel",
    img: child1,
    message: "Nepal",
    category: '10 years old',
    link: '/sponser-pokhrel'
  },

  {
    title: "Tara",
    img: child2,
    message: "Nepal",
    category: '14 years old',
    link: '/sponser-tara',
    saying: [
      {
        "saying": `
        Born In:
        August
        Dream Job:
        Nurse
        SPONSOR TARA
        In rural villages across Nepal, families suffer from chronic poverty. There's little access to health services or nutritious food, and extreme weather events disrupt daily life. Children have to walk miles to reach the nearest school — and early marriage and child labor often keep them out of the classroom.`
      },
      {
        "saying": `Supporters like you are committed to creating a better tomorrow for children not only in this country but all over the world. Your ongoing gift helps give children a healthy start in life, the opportunity to learn and protection from harm. You make it possible for us to partner with children, their communities and local partners. Together, we are transforming their lives and the future we share.`
      },
    ]
  },
  {
    title: "Ansh",
    img: child3,
    message: "Nepal",
    category: '7 years old',
    link: '/sponser-ansh',
    saying: [
      {
        "saying": `
            Born In:
            August
            Dream Job:
            Nurse
            SPONSOR TARA
            In rural villages across Nepal, families suffer from chronic poverty. There's little access to health services or nutritious food, and extreme weather events disrupt daily life. Children have to walk miles to reach the nearest school — and early marriage and child labor often keep them out of the classroom.`
      },
      {
        "saying": `Supporters like you are committed to creating a better tomorrow for children not only in this country but all over the world. Your ongoing gift helps give children a healthy start in life, the opportunity to learn and protection from harm. You make it possible for us to partner with children, their communities and local partners. Together, we are transforming their lives and the future we share.`
      },
    ]
  }
]
function Home() {
  return (
    <div className='min-h-screen'>
      <Reveal width='w-[100%]'>
        <Carousel />
        <SocialMedia />
      </Reveal>
      <Reveal width='w-[100%]'>
        <Section />
      </Reveal>
      <Reveal width='w-[100%]'>
        <About />
        </Reveal>
      <Reveal width='w-[100%]'>
        <Events />
        <Need />
      </Reveal>
      <div className='bg-white'>
        <h1 className='text-xl lg:text-4xl pb-3 lg:pb-4 text-center mb-0 text-second'>Sponser Children</h1>
        <div className='flex lg:flex-row sm:flex-row flex-col w-11/12 flex-wrap justify-between mx-auto'>
          {eventData.slice(0, 3).map((event, index) => (
            <SponserOtherChild link={event.link} key={index} title={event.title} category={event.category} img={event.img} message={event.message} />
          ))}

        </div>
      </div>
      <JoinVolunteer />
      <MissionGoal />
      <Newsletter />
    </div>
  )
}

export default Home