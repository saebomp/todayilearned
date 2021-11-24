import React, {useState} from 'react';

const styles = {
  container: {
    margin:'20px auto',
    maxWidth:'50%'
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
  },
  td1 : {
    width:'40%',
    textAlign:'left',
    padding:'4px'
  },
  td2 : {
      textAlign:'center',
  },
  td3 : {
      width:'15%',
      textAlign:'center',
      padding:'4px'
  }
}
  
  const CrudHooks = () => {
    const todoData = [
      { id:1, checked: false, item:'Study CRUD', category:'Work'},
      { id:2, checked: false, item:'Shop Grocery', category:'Health'},
      { id:3, checked: true, item:'Shop Grocery', category:'School'},
    ]
    const initialFormState = {id:null, checked:'', item:'', category:''}
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
      if(items.item == '' && items.category !== '0') return
      console.log('adddtdoooo', items)
      addTodos(items)
      setItems(initialFormState)
    }

    const addTodos = (todo) => {
      todo.id = todos.length + 1
      todo.checked = false
      setTodos([...todos, todo])
      console.log(items)
    }

    const getType = (e) => {
      const {value} = e.target;
      setItems({...items, category:value}) 
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
    })

    const handleTypeEdit = () => {
      console.log()
    }

    const handleStatus = (index) => {
      const newTodos = [...todos]
      console.log('newtodossssss',newTodos )
      newTodos[index].checked = !todos[index].checked
      setTodos(newTodos)
    }

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
              <select onChange={getType}>
                <option value="0">Select a Category</option>
                <option value="Work">Work</option>
                <option value="Health">Health</option>
                <option value="Study">Study</option>
              </select>
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
              <select onChange={handleTypeEdit}>
                <option value="0">Select a Category</option>
                <option value="Work">Work</option>
                <option value="Health">Health</option>
                <option value="Study">Study</option>
              </select>
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
          <table>
            {todos.map((list, index) => (
            <tr style={styles.list}
              className={list.checked ?'inactive' :''}>
              <td>
                <input 
                  type="checkbox" 
                  style={styles.chbox} 
                  checked={list.checked}
                  onClick={()=> handleStatus(index)}
                />
              </td>
              <td style={styles.td1}>
                {list.item}
              </td>
              <td style={styles.td3}>
                  {list.category}
              </td>
              <td style={styles.td2}>
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
              </td>
            </tr>
          ))}
          </table>
        </div>
    )
  }

  export default CrudHooks