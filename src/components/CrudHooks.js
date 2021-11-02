import React, {useState} from 'react';

const styles = {
  container: {
    margin:'20px auto',
    maxWidth:'300px'
  },
  list : {
    listStyle:'none',
    display:'flex',
    alignItems:'center',
    margin:'5px 0'
  },
  btn: {
    width:'20px',
    marginLeft:'10px',
    cursor:'pointer'
  },
  chbox: {
    marginRight:'5px',
  },
  inactive: {
      textDecoration:'underline'
  }
  }

  const CrudHooks = () => {
    const todoData = [
      { id:1, checked: false, item:'Study CRUD'},
      { id:2, checked: false, item:'Shop Grocery'},
    ]
    const initialFormState = {id:null, checked:'', item:''}
    const [todos, setTodos] = useState(todoData)

    return (
        <div style={styles.container} className="crud">
          <div className="input">
            <input type="text" />
            <button type="submit">Add</button>
          </div>
          <ul>
          {todos.map(list => (
            <li style={styles.list}>
              <input type="checkbox" style={styles.chbox} />
              {list.item}
              <span>
                <img
                    style={styles.btn} 
                    src="https://img.icons8.com/material-outlined/24/000000/close-window.png"/>
              </span>
              <span>
                <img
                    style={styles.btn} 
                    src="https://img.icons8.com/material/24/000000/edit--v1.png"/>
              </span>
            </li>
          ))}
          </ul>
        </div>
    )
  }

  export default CrudHooks