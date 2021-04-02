import React, {useState, useEffect} from 'react';

const styles = {
  count: {
    padding: '10px',
    marginTop:'10px'
  },
  btn: {
    backgroundColor:'#eee',
    padding:'10px',
    border:'none',
    marginRight:'3px',
    marginTop:'10px'
  }
}

const increments = [1,2,5,10]
const mockApi = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const randomInt = Math.ceil(Math.random()*10);
      // 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다
      resolve(randomInt);
    }, 1000)
  })
}

const Count = () => {
  const [count, setCount] = useState(0);
  const [hasFetched, setFetch] = useState(false);

  useEffect(async() => {
    if(!hasFetched){
      const apiResponse = await mockApi();
      setFetch(true);
      setCount(count + apiResponse);
    }
  },[]);
  useEffect(() => {
    document.title = 'Count: ' + count;
  })

  return (
    <div style={styles.count}>
      <p>Count : {count}</p>
      {hasFetched ? (
        <div>
          {increments.map(value => {
            return <button 
            style={styles.btn} 
            onClick={() => setCount(count + value)}>
              +{value}
            </button>
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      </div>
  )
  }
  
export default Count

//https://hub.packtpub.com/getting-started-with-react-hooks-by-building-a-counter-with-usestate-and-useeffect/