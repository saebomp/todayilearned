import React, {useState} from 'react';

const styles = {
  input: {
    padding: '10px',
    marginTop:'10px'
  },

}


const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (event) => {
    const {
      target : {value}
    } = event;


    let willUpdate = true;
    if(validator){
      willUpdate = validator(value)
    }
    if (willUpdate) {
      setValue(value)
    } else {
      alert('max length is 10')
    }
  }
  return {value, onChange}
}

const UseInput = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("", maxLen);
  return (
    <div className="useinput">
      <p>Hello, please enter your name</p>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input style={styles.input} placeholder="Name" {...name} />
    </div>
    )
  }
  
  export default UseInput

  //https://www.youtube.com/watch?v=s6KmBH1Ew4Q