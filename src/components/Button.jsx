import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to='/donation'>
    <button className=" bg-second text-white  px-6 py-2 rounded-full">
      Donate Now
    </button>
    </Link>
  );
};

export default Button;