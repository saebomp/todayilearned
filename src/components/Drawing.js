import React, {useState} from 'react';

const styles = {
  mar: {
    padding: '10px',
    marginTop:'10px'
  },

}

const Drawing = () => {

  return (
    <>
    <div style={styles.mar}>
      <canvas />
    </div>
    </>
    )
  }
  
  export default Drawing