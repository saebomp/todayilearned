import React, {useState} from 'react';

const styles = {
  mar: {
    margin:'10px'
  },
  box1: {
    width:'100px',
    height:'100px',
    backgroundColor:'lightpink',
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)'
  },
  box2: {
    width:'100px',
    height:'100px',
    backgroundColor:'lightblue',
    position:'absolute',
    top:'50%',
    left:'50%',
    marginTop:'-50px',
    marginLeft:'-50px',
  }
}

const CenterElement = () => {

  return (
    <div style={styles.mar}>
      <h3>1. position:absolute; top:50%; left:50%;  transform: translate(-50%, -50%) </h3>
      <div style={styles.box1}></div>
      <h3>2. position absolute; top:50%; left 50% margin-left and margin-top minus half of width.  </h3>
      <div style={styles.box2}></div>
    </div>
    )
  }
  
export default CenterElement
