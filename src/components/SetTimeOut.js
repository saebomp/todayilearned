import React, {useState, useEffect} from 'react';

const styles = {
  mar: {
    margin:'10px'
  },
  btn: {
    padding:'10px',
    margin:'5px'
  },

}


const SetTimeOut = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
       setCount(1);
     }, 3000);
 
    return () => clearTimeout(timeout);
   },[count]);


  const counter = (event) => {
    setCount(count + 1);
  }
  return (
    <>
    <div style={styles.mar}>
      <h1>{count}</h1>
        <button onClick={counter} style={styles.btn}>Increment</button>
      </div>
    </>
    )
  }
  
  export default SetTimeOut

  // https://reactgo.com/settimeout-in-react-hooks/