import React, {useState, useEffect} from 'react';

const styles = {
  useeffect: {
    margin:'10px'
  },
  btn: {
    padding: '5px',
    width:'40px'
  },
  list:{
    margin:'10px',
    marginTop:'20px'
  },
  listLi: {
    marginBottom:'5px',
    lineHeight:'1.5'
  }
}


const UseEffect = () => {
  const sayHello = () => console.log("hello");
  //[] 안에 있는게 바뀔때만 sayHello 실행
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number])
  return (
    <>
    <div style={styles.useeffect}>
      <button style={styles.btn} onClick={() => setNumber(number +1)}>{number}</button>
      <button style={styles.btn} onClick={() => setAnumber(aNumber +1)}>{aNumber}</button>
    </div>
    <ul style={styles.list}>
      <li style={styles.listLi}>- useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</li>
      <li style={styles.listLi}>- What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.</li>
      <li style={styles.listLi}>- By default, it runs both after the first render and after every update.</li>
    </ul>
    </>
    )
  }
  
  export default UseEffect

  //https://www.youtube.com/watch?v=qTpUvdjO0PE