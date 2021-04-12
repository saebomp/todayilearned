import React from 'react';
import {Link} from 'react-router-dom'
import { IoIosArrowDropleftCircle } from "react-icons/io";


const Title = () => {
  return (
    <div className="title">
      <span className="back">
      <Link to={process.env.PUBLIC_URL + '/'}>
        <IoIosArrowDropleftCircle />
      </Link>
      </span>
      What I Learned
    </div>
  )
}

export default Title