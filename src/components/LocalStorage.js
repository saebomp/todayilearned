import React, {useState} from 'react';

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
    text: 'Drinking coffee',
    done: false,
  },
  // {
  //   id: 'b',
  //   name: 'Robin',
  // },
];


const LocalStorage = () => {
  const [list, setList] = useState(initialList);

  const handleChange = (event) => {

  }
  
  const handleAdd = (e) => {
    e.preventDefault();


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
      <ul>

      </ul>
      <form onSubmit={handleAdd}>
        <input style={styles.input} type="text" placeholder="Item Name" onChange={handleChange} required />
        <button style={styles.input} type="button">+ Add Item</button>
      </form>
    </div>
    </>
    )
  }
  
  export default LocalStorage

//https://www.robinwieruch.de/react-add-item-to-list
//https://medium.com/@dondeveloper/creating-a-shopping-list-app-using-react-hooks-bfd231cad813
//이거보고 [value, setValue] 만들어서 concat하는 식으로 해볼것