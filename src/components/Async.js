import React, {useState, useEffect} from 'react';
import axios from 'axios';

const styles = {
  margin: {
    padding: '10px',
    marginTop:'10px',
  },

}

const Async = () => {
  const [data, setData] = useState({ hits: [] });
  // initial state is an empty list of hits in an object that represents the data.
  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
    setData(result.data);
  });
  //data 결과를 받아오는데 시간이 오래걸리면 텅빈 data를 출력해버리게된다. then이라는 콜백함수를 등록해놓으면 data가 준비되는대로 니가 등록한 콜백 함수를 불러줄께 라는 뜻

  return (
    <ul style={styles.margin}>
    {data.hits.map(item => (
      <li key={item.objectID}>
        {item.title}
      </li>
    ))}
  </ul>
  )
  }
  
export default Async

// https://www.robinwieruch.de/react-hooks-fetch-data
// https://blog.naver.com/vkfkdto0209/222226895837