import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { DATA }  from './Data';


const Nav = () => {
  const [items] = useState(DATA);

  return (
    <>
    <ul className="list">
      {items.map((item) => (
        <Link to={item.path}>
        <li>{item.title}</li>
      </Link>
      ))}
    </ul>
    </>
  )
}

export default Nav
//pass a function that iterate over the [] array as an argument (item)

//https://blog.naver.com/nicholasdw/222286137809   :map설명
