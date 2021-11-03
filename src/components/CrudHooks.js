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
    const [items, setItems] = useState(initialFormState)

    const handleChange = (e) => {
      const {value} = e.target;
      setItems({...items, item:value })
      // console.log(items)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if(items.item == '') return
      addTodos(items)
      setItems(initialFormState)
    }
    const addTodos = (todo) => {
      todo.id = todos.length + 1
      todo.checked = false
      setTodos([...todos, todo])
      console.log(items)
    }
    return (
        <div style={styles.container} className="crud">
          <div className="input">
            <form 
              onSubmit={handleSubmit}
            >
              <input 
                type="text"
                value={items.item}
                onChange={handleChange}
              />
              <button type="submit">Add</button>
            </form>
          </div>



          {/* Displaying Lists */}
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