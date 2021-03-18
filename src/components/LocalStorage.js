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
  const [lists, setLists] = useState(initialList);

  return (
    <>
    <div style={styles.content}>
      <h2 style={styles.title}>Todo lists</h2>
      <ul>
        {lists.map((item, index) => (
          <li key={index} style={styles.list}>{item.text}</li>
        ))}
      </ul>

      <InputText handleSubmit = {(list) => {
        setLists(lists.concat(list))
      }}
      />
    </div>
    </>
    )
  }
  
  const InputText = (props) => {
    const [value, setValue] = useState('')
    return (
      <form onSubmit={(e) =>{
        e.preventDefault();
        props.handleSubmit(value);
        console.log(value)
        setValue('');
      }}>
        <input style={styles.input} type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button style={styles.input} type="button">+ Add Item</button>
      </form>
    )
  }
  export default LocalStorage

//https://www.robinwieruch.de/react-add-item-to-list
//https://medium.com/@dondeveloper/creating-a-shopping-list-app-using-react-hooks-bfd231cad813
//https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
//이거 따라해볼것,,