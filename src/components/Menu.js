import React, {useState} from 'react';

const styles = {
  mar: {
    margin:'10px auto',
    width:'50%'
  },
  
}

const Menu = () => {
  const [style, setStyle] = useState(true)
  const handleSlide = () => {
    console.log('ddddd')
    setStyle(!style)
  }
  return (
    <div className="sideMenu">
      <div className={style ? "contents" : "contents active"}>
          <div>contents</div>
          <div>contents</div>
          <div>contents</div>
          <div>contents</div>
      </div>
      <div className={style ? "slide_wrap" : "slide_wrap active"}>
        <div className="slide" onClick={handleSlide}>Click</div>
        <ul className="menu">
          <li>Menu1</li>
            <select>
              <option>menu1</option>
              <option>menu1</option>
              <option>menu1</option>
              <option>menu1</option>
              <option>menu1</option>
            </select>
          <li>Menu2</li>
        </ul>
      </div>
    </div>
    )
  }
  
export default Menu



// https://dribbble.com/shots/16878702-Sidebar-Navigation

// slider
// https://codesandbox.io/s/j1l61qj8qv?file=/src/Slider/index.js