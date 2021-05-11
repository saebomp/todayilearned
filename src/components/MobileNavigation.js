import React, {useState} from 'react';
import { GoThreeBars } from 'react-icons/go';
import { GoX } from 'react-icons/go';

const styles = {
  mar: {
    padding: '10px',
  },
}


const MobileNavigation = () => {
const [open, setOpen] = useState(false);


  return (
    <div style={styles.mar} className="mn">
      <button className="nav-btn open-btn" onClick={() => setOpen(true)}>
        <i><GoThreeBars /></i>
      </button>
      <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="Logo" className="logo" />
      <p className="text">Mobile Navigation</p>
      <div className={`${open ? "nav nav-black visible" : "nav nav-black"}`}> 
        <div className={`${open ? "nav nav-red visible" : "nav nav-red"}`}> 
          <div className={`${open ? "nav nav-white visible" : "nav nav-white"}`}> 
            <button className="nav-btn close-btn" onClick={() => setOpen(false)}>
              <i><GoX /></i>
            </button>
            <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="Logo" className="logo" />
            <ul className="list1">
              <li><a href="#">Teams</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Life at Netflix</a></li>
              <li>
                <ul>
                  <li><a href="#">Netflix culture memo</a></li>
                  <li><a href="#">Work life balance</a></li>
                  <li><a href="#">Inclusion, diversity</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
  }
  
export default MobileNavigation

//https://github.com/bradtraversy/50projects50days/blob/master/netflix-mobile-navigation/index.html

// const open_btn = document.querySelector('.open-btn')
// const close_btn = document.querySelector('.close-btn')
// const nav = document.querySelectorAll('.nav')

// open_btn.addEventListener('click', () => {
//   nav.forEach(el => el.classList.add('visible'))
// })
// close_btn.addEventListener('click', ()=>{
//   nav.forEach(el => el.classList.remove('visible'))
// })