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

  const [inputValue, setInputValue] = useState('')

  const handleValue = (event) => {
    // e.preventDefault;
    const {value} = event.target
    console.log(value)
    return (
      <div>{value}</div>
    )
  }

  return (
    <div style={styles.mar}>
      <form onSubmit={handleValue}>
      <input type="text" style={styles.input} />
      <button style={styles.btn} >submit</button>
      </form>
    </div>
    )
  }
  
export default Converter
