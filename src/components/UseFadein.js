import React, {useState, useEffect, useRef} from 'react';

const styles = {
  mar: {
    padding: '10px',
    marginTop:'10px'
  },
}

const useFadein = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number"){
    return
  }
  
  return {ref:element, style:{opacity:0}};
}


const UseFadein = () => {
  const fadeInh1 = useFadein(2, 1)
  const fadeInP = useFadein(5, 2);
  return (
    <>
    <div style={styles.mar}>
      <h1 {...fadeInh1}>Hello</h1>
      <p {...fadeInP}>whatever</p>
    </div>
    </>
    )
  }
  export default UseFadein

  //https://www.youtube.com/watch?v=TxZBPBCKiHE