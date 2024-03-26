import React from 'react'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'

function Home() {
  return (
    <div className='bg-second min-h-screen'>
        <Navbar/>
        <SocialMedia/>  
    </div>
  ) 
}

export default Home