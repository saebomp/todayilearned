import React from 'react';
import {Link} from 'react-router-dom'


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
      <Link to="/useTitle">
        <li>useTitle</li>
      </Link>
      <Link to="/useClick">
        <li>useClick</li>
      </Link>
    </ul>
    </>
  )
}

export default Nav