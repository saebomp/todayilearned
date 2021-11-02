import React, {useState} from 'react';

const styles = {
    margin: {
      padding: '10px',
      marginTop:'10px',
    },
  }

  const CrudHooks = () => {
    const todoData = [
      { id:1, checked: false, item:'Study CRUD'},
      { id:2, checked: false, item:'Shop Grocery'},
    ]
    const initialFormState = {id:null, checked:'', item:''}
    const [todos, setTodos] = useState(todoData)

    return (
        <div>
          {todos.map(list => (
            <li>{list.item}</li>
          ))}
        </div>
    )
  }

  export default CrudHooks