import React, {useState, useEffect} from 'react';

const styles = {
  content: {
    margin:'10px'
  },
  list: {
    lineHeight:'2'
  },
  title:{
    marginBottom:'20px'
  },
  input: {
    padding:'10px',
    outline:'0',
    border:'1px solid #eee',
    marginTop:'10px'
  }
}

const initialList = [
  {
    text: 'Studying',
    done: false,
  },
  {
    text: 'Studying',
    done: false,
  },
  // {
  //   id: 'b',
  //   name: 'Robin',
  // },
];


const LocalStorage = () => {
  const [list, setList] = useState(initialList);
  // const [name, setName] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value)
  }
  
  const handleAdd = (e) => {
    e.preventDefault();
    const text = e.target.value;
    setList([...list, {text:text, done:false}])
    console.log('setList', setList)
  }
  
  return (
    <>
    <div style={styles.content}>
      <h2 style={styles.title}>Todo lists</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index} style={styles.list}>{item.text}</li>
        ))}
      </ul>
      <form>
        <input style={styles.input} type="text" placeholder="Item Name" onChange={handleChange} required />
        <button style={styles.input} type="button" onClick={handleAdd}>+ Add Item</button>
      </form>
    </div>
    </>
    )
  }
  
  export default LocalStorage

//https://www.robinwieruch.de/react-add-item-to-list