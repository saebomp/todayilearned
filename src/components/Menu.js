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
  const handleMenu = () => {
    console.log('ddd')
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
          <li>Menu1<span><img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-9.png" onClick={handleMenu} /></span></li>
            <ul>
              <li>menu1</li>
              <li>menu1</li>
              <li>menu1</li>
              <li>menu1</li>
              <li>menu1</li>
            </ul>
          <li>Menu2<span><img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-9.png" onClick={handleMenu} /></span></li>
        </ul>
      </div>
    </div>
    )
  }
  
export default Menu



// https://dribbble.com/shots/16878702-Sidebar-Navigation

// slider
// https://codesandbox.io/s/j1l61qj8qv?file=/src/Slider/index.js