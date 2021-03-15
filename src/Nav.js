import React from 'react';
import {Link} from 'react-router-dom'
import useInput from './components/UseInput'
import useTab from './components/UseTab'
import useEffect from './components/UseEffect'


const Nav = () => {
  return (
    <>
    <ul className="list">
      <Link to="/useInput">
        <li>useInput</li>
      </Link>
      <Link to="/useTab">
        <li>useTab</li>
      </Link>
      <Link to="/useEffect">
        <li>useEffect</li>
      </Link>
      <Link to="/localStorage">
        <li>local storage</li>
      </Link>
    </ul>
    </>
  )
}

export default Nav