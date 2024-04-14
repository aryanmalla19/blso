import React, { useState } from 'react';
import EventCard from './EventCard';
import earthquake_nepal from '../assets/earthquake-nepal.jpg'
import agriculture from '../assets/agricultre.jpg'
import family_support from '../assets/family-support.jpg'
import home_guiding from '../assets/home-guding.jpg'
import volunteer from '../assets/volunteer.jpg'
import teacher_training from '../assets/teacher-training.jpg'
import shoes from '../assets/shoes-2.jpg'
import birthday_project from '../assets/birtday-project.jpg'
import tent from '../assets/tent.jpg'

const eventData = [
  {
    title: "Earthquake Project",
    img: earthquake_nepal,
    message: "It was a powerful earthquake measuring 7.8 on the Richter scale that struck the area between Kathmandu and Pokhara at 11:56 local time on Saturday, 25 April 2015.",
    category: '1',
    link: '/nepal-earthquake'
  },
  {
    title: "Agricultures Project with BLSO",
    img: agriculture,
    message: "The Agricultural Development Project, initiated by Better Life Social Organization, aims to uplift Nepalese farmers by providing them with the necessary support, training, and resources.",
    category: '2',
    link: '/agriculture-project'
  },
  {
    title: "Family Support Project",
    img: family_support,
    message: "The Family Support Project aims to empower needy families by providing assistance in various areas, including small business investment, agriculture, livestock, land lease, and equipment support.",
    category: '3',
    link: '/family-support-project'
  },
  {
    title: "Home Guidance Class project",
    img: home_guiding,
    message: "The Home Guidance Class project, sponsored by Mr. Katsuta Fumitaka Dai, was initiated at Bal Bikash Sumudayik School in Letang-01, Morang.",
    category: '1',
    link: '/home-guidance'
  },
  {
    title: "Volunteer Opportunity Nepal with BLSO",
    img: volunteer,
    message: "Volunteering with Better Life Social Organization (BLSO) Nepal offers a unique opportunity to make a positive impact in the lives of others.",
    category: '2',
    link: '/volunteer-project'
  },
  {
    title: "Teacher Training Project",
    img: teacher_training,
    message: "The goal of this project is to provide teacher training to community-based teachers in Sarlahi, Morang, Jhapa, Panchthar  to improve the quality of education for students in rural communities.",
    category: '3',
    link: '/education-project'
  },
  {
    title: "Shoes Distribution Project",
    img: shoes,
    message: "The goal of this project is to provide teacher training to community-based teachers in Sarlahi, Morang, Jhapa, Panchthar  to improve the quality of education for students in rural communities.",
    category: '1',
    link: '/shoes-distribution-project'
  },
  {
    title: "Group Birthday Project",
    img: birthday_project,
    message: "The Group Birthday Project recognizes that celebrating birthdays is a cherished experience for many children, but unfortunately, it is a luxury that some underprivileged children do not have.",
    category: '2',
    link: '/birthday-project'
  },
  {
    title: "Tent Provision for 20 Homeless Riverside Families",
    img: tent,
    message: "The Better Life Social Organization, with the generous donation from Tukumi Katyama, initiated a project to provide tents for 20 homeless families living by the riverside.",
    category: '3',
    link: '/tent-provision-project'
  }
];

function Events() {
  const categories = [
    {
      value: '0',
      label: 'ALL'
    },
    {
      value: '1',
      label: 'Upcoming'
    },
    {
      value: '2',
      label: 'Running'
    },
    {
      value: '3',
      label: 'Completed'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('0');

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredEvents = selectedCategory === '0' ? eventData : eventData.filter(event => event.category === selectedCategory);

  return (
    <div className='lg:my-12'>
      <h1 className='text-xl lg:text-4xl mt-4 mb-2 lg:my-5 text-center font-poppins font-semibold text-second'>Our Events</h1>
      <div className='flex mb-3 lg:mb-5 justify-center'>
        {categories.map((cat) => (
          <div key={cat.value} className='lg:mb-5 lg:mt-3'>
            <label htmlFor={cat.value}>
              <input type="radio" name="category" id={cat.value} className='hidden' onChange={handleChange} value={cat.value} checked={selectedCategory === cat.value} />
              <span className={`text-third cursor-pointer  transition duration-200 font-semibold px-[10px] py-[5px] text-sm md:text-xl ${selectedCategory === cat.value ? "aactive" : ""}`}>{cat.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div className='flex lg:flex-row sm:flex-row flex-col w-11/12 flex-wrap justify-between mx-auto'>
        {filteredEvents.map((event, index) => (
            <EventCard key={index} title={event.title} link={event.link} img={event.img} message={event.message} />
        ))}
      </div>
    </div>
  );
}

export default Events;
