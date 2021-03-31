import React, {useEffect, useRef} from 'react';

const styles = {
  mar: {
    padding: '10px',
    marginTop:'10px'
  },
}

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
  })
  return element
}

const UseClick = () => {
  const sayHello = () => {console.log('hello')}
  const title = useClick(sayHello);
  return (
    <>
    <div style={styles.mar}>
      <h1 ref={title}>Hi</h1>
      <p>Click "Hi" and check out the console</p>
    </div>
    </>
    )
  }
  export default UseClick

  //https://www.youtube.com/watch?v=0BuVYgM86gA