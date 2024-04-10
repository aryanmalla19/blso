import React from 'react'
import Sponser from '../components/Sponser'
import Help from '../components/Help'

function SponserChild() {
  return (
    <div>
        <Sponser/>
        <div className='bg-wow'>
        <Help/>
        </div>
    </div>
  )
}

export default SponserChild