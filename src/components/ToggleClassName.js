import React, {useState, useEffect} from 'react';

const styles = {
  btn: {
    padding:'10px',
    margin:'5px'
  },

}


const ToggleClassName = () => {
  const [style, setStyle] = useState(true);

  const color = (event) => {
    setStyle(!style)
  }

  return (
    <>
    <div className={style ? 'lightblue' : 'lightpink'}>
        <button onClick={color} style={styles.btn}>change bg color</button>
      </div>
    </>
    )
  }
  
  export default ToggleClassName

  // https://stackoverflow.com/questions/49014937/addclass-and-removeclass-react