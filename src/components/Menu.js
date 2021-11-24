import React, {useState} from 'react';

const styles = {
  mar: {
    margin:'10px auto',
    width:'50%'
  },
  
}

const Menu = () => {


  return (
    <div className="sideMenu">
        <header className="header">
            <div>Logo</div>
            <ul className="float">
                <li>Menu1</li>
                <li>Menu2</li>
                <li>Menu3</li>
                <li>Menu4</li>
                <li>Menu5</li>
                <li>Menu6</li>
                <li>Menu7</li>
                <li>Menu8</li>
            </ul>
        </header>
        <div>
            <div>contents</div>
            <div>contents</div>
            <div>contents</div>
            <div>contents</div>
        </div>
        
    </div>
    )
  }
  
export default Menu
