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
        {/* 여기에 버튼 넣어서 슬라이드 만듦(translate3d위치 바뀌는걸로) */}
        <ul className="menu menu1">
          <li>Menu1</li>
          <li>Menu2</li>
        </ul>
        <ul className="menu menu2">
          <li>Menu3</li>
          <li>Menu4</li>
        </ul>
        <ul className="menu menu3">
          <li>Menu5</li>
          <li>Menu6</li>
        </ul>
      </div>
    </div>
    )
  }
  
export default Menu



// https://dribbble.com/shots/16878702-Sidebar-Navigation

// slider
// https://codesandbox.io/s/j1l61qj8qv?file=/src/Slider/index.js