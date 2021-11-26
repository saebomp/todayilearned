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
      <ul className={style ? "menu" : "menu active"}>
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
        <li>Menu4</li>
        <li>Menu5</li>
        <li>Menu6</li>
        <li>Menu7</li>
        <li>Menu8</li>
        <div className="slide" onClick={handleSlide}>Click</div>
      </ul>
    </div>
    )
  }
  
export default Menu



// https://dribbble.com/shots/16878702-Sidebar-Navigation