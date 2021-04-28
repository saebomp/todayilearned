import React, {useState, useEffect} from 'react';

const styles = {
  mar: {
    margin:'10px'
  },
  btn: {
    padding:'10px',
    marginTop:'5px',
    marginBottom:'5px'
  },

}


const SetTimeOut = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
       setCount(1);
     }, 3000);
 
    return () => clearTimeout(timeout);
    //clearTimeout 안해주면 버튼 여러번 클릭할때마다 count 가 1로 돌아감. 한번에 6까지 count 를 올리고 3초뒤에 count가 1로 돌아가게 하기위해서 clearTimeout 해줌
   },[count]);


  const counter = (event) => {
    setCount(count + 1);
  }
  return (
    <>
    <div style={styles.mar}>
      <h1>{count}</h1>
        <button onClick={counter} style={styles.btn}>Increment</button>
        <p>The number would be back to "1" after 3 seconds</p>
    </div>
    </>
    )
  }
  
  export default SetTimeOut

  // https://reactgo.com/settimeout-in-react-hooks/