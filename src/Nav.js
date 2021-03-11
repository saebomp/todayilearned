import React from 'react';
import {Link} from 'react-router-dom'
import useInput from './components/UseInput'
import useTab from './components/UseTab'

const Nav = () => {
  return (
    <ul className="list">
      <Link to="/useInput">
        <li>useInput</li>
      </Link>
      <Link to="/useTab">
        <li>useTab</li>
      </Link>
    </ul>
  )
}

export default Nav