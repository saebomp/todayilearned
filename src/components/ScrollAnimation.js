import React, {useState} from 'react';

const styles = {
  scroll: {
    padding: '10px',
    marginTop:'10px'
  },
  box: {
    backgroundColor:'steelblue',
    color:'white',
    display:'flex',
    alignItem:'center',
    justifyContent:'center',
    width:'400px',
    height:'200px',
    margin:'10px',
    borderRadius:'10px',
    transform:'translateX(400%)',
    transition:'transform 0.4s ease'
  }
}


const ScrollAnimation = () => {
  const n = 12;
  return (
    <div style={styles.scroll}>
      <h1>Scroll to see the animation</h1>
      {[...Array(n)].map((e, i) => <div style={styles.box}><h2>Content</h2></div>)}
    </div>
    )
  }
  
  export default ScrollAnimation

//:nth-of-type(even) {react native 로 넣기

//https://github.com/bradtraversy/50projects50days/blob/master/scroll-animation/style.css