import React from 'react'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'
import Carousel from '../components/Carousal'

function Home() {
  return (
    <div className='bg-second min-h-screen'>
        <Navbar/>
        <SocialMedia/>  
        <Carousel />
    </div>
  ) 
}

export default Home