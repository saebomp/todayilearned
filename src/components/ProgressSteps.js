import React, {useState, useEffect} from 'react';

const styles = {
  margin: {
    padding: '10px',
    marginTop:'10px',
    // display:'flex',
    alignItem:'center',
    justifyContent:'center',
    height:'100vh',
    overflow:'hidden',
    textAlign:'center'
  },
  progressContainer: {
    display:'flex',
    justifyContent: 'space-between',
    position:'relative',
    margin:'30px auto', 
    maxWidth:'100%',
    width:'350px',
    '::before': {
      content:'',
      backgroundColor: '#e0e0e0',
      position:'absolute',
      top:'50%',
      left:'0',
      transform: 'translateY(-50%)',
      height: '4px',
      width:'100%',
      zIndex: '-1',
    },
  },
  progress: {
    backgroundColor: '#3498db',
    position:'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    height: '4px',
    width: '0%',
    zIndex: '-1',
    transition:' 0.4s ease',
  },
  circle: {
    backgroundColor: '#fff',
    color:'#999',
    borderRadius: '50%',
    height:'30px',
    width:'30px',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    border: '3px solid #e0e0e0',
    transition:' 0.4s ease',
  },
  circleactive: {
    backgroundColor: '#fff',
    color:'#999',
    borderRadius: '50%',
    height:'30px',
    width:'30px',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    border: '3px solid #3498db',
    transition:' 0.4s ease',
  },
  btn: {
    backgroundColor:'#3498db',
    color: '#fff',
    border: '0',
    borderRadius: '6px',
    cursor: 'pointer',
    padding: '8px 30px',
    margin: '5px',
    fontSize: '14px',
    ':focus': {
      outline:'0'
    }
  },

}

const ProgressSteps = () => {
  let currentActive = 1;
  let activeBtn = () => {
    currentActive++;
    console.log(currentActive)
    // update()
  }

  return (
   <div style={styles.margin}>
      <div style={styles.progressContainer}>
        <div style={styles.progress} id="progress"></div>
        <div style={styles.circleactive}>1</div>
        <div style={styles.circle}>2</div>
        <div style={styles.circle}>3</div>
        <div style={styles.circle}>4</div>
      </div>
      <button style={styles.btn} id="prev" onClick={activeBtn}>Prev</button>
      <button style={styles.btn} id="next">Next</button>
   </div>
  )
  }
  
export default ProgressSteps
