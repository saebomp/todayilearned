import React, {useState} from 'react';

const styles = {
  mar: {
    margin:'10px auto',
    width:'50%'
  },
  input: {
      padding:'10px',
      width:'80%'
  },
  btn: {
    padding:'10px',
    width:'15%'
}
}

const Converter = () => {

  return (
    <div style={styles.mar}>
      <input type="text" style={styles.input} />
      <button style={styles.btn} >submit</button>
    </div>
    )
  }
  
export default Converter
