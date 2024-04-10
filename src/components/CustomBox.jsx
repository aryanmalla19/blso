import React from 'react'
import { Link } from 'react-router-dom'

function CustomBox({ name, link }) {
  if (!link) {
    return (
      <button className="bg-black text-white  px-6 py-2 rounded-full">
        {name}
      </button>
    )
  } else {
    return(
    <Link to={link}>
      <button className="bg-black text-white  px-6 py-2 rounded-full">
        {name}
      </button>
    </Link>
    )
  }
}

export default CustomBox