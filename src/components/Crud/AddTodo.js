import React, {Component} from 'react';

const styles = {

}

const AddTodo = ({handleInput, handleSubmit, newItem}) => {

    const handleChange = (e) => {
        const todoItem = e.target.value
        handleInput(todoItem)
    }
 
    return (
        <div className='addtodo'>
            <input type="text" value={newItem} onChange={handleChange} />
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    )
}
export default AddTodo


