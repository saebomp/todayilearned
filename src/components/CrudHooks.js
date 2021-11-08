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
    cursor:'pointer',
  },
  chbox: {
    marginRight:'5px',
  },
  inactive: {
      textDecoration:'underline'
  },
  btn2 :{
    padding:'1px',
    marginLeft:'1px'
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
    const [edit, setEdit] = useState(false)

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

    const handleDelete = (id) => {
      setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleEdit = (todo) => {
      setEdit(true);
      setItems({id:todo.id, checked:todo.checked, item:todo.item})
    }

    const handleCancel = () => {
      setEdit(false);
      setItems({item:''})
    }

    const handleInputEdit = (e) => {
      const {value} = e.target;
      setItems({
        ...items, item:value
      })
    }

    const handleUpdate = (e) => {
      e.preventDefault();
      handleUpdateTodo(items.id, items)
    }
    
    const handleUpdateTodo = ((id, updatedTodo) => {
      setEdit(false)
      
      setTodos(todos.map((todo)=> (
        todo.id === id ? updatedTodo:todo
      )))
      console.log('dalksjdlkjalkjsd', todos)
    })
    return (
        <div style={styles.container} className="crud">
          {!edit ? (
          <div className="input">
            <form 
              onSubmit={handleSubmit}
            >
              <input 
                type="text"
                value={items.item}
                onChange={handleChange}
              />
              <button type="submit" style={styles.btn2}>Add</button>
            </form>
          </div>
          ): (

          <div className="input">
            <form 
              onSubmit={handleUpdate}
            >
              <input 
                type="text"
                value={items.item}
                onChange={handleInputEdit}
              />
              <button 
                type="submit"
                onClick={handleCancel}
                style={styles.btn2}
              >Cancel</button>
              <button 
                type="submit" 
                style={styles.btn2}
              >Update</button>
            </form>
          </div>
          )}

          {/* Displaying Lists */}
          <ul>
          {todos.map(list => (
            <li style={styles.list}>
              <input 
                type="checkbox" 
                style={styles.chbox} 
                checked={list.checked}
              />
              {list.item}
              <span>
                <img
                    style={styles.btn} 
                    onClick={() => handleDelete(list.id)}
                    src="https://img.icons8.com/material-outlined/24/000000/close-window.png"/>
              </span>
              <span>
                <img
                    style={styles.btn} 
                    onClick={() => handleEdit(list)}
                    src="https://img.icons8.com/material/24/000000/edit--v1.png"/>
              </span>
            </li>
          ))}
          </ul>
        </div>
    )
  }

  export default CrudHooks