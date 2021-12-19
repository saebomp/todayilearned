import React, {Component} from 'react';

const styles = {

}

const AddTodo = ({handleInput, handleSubmit}) => {

    const handleChange = (e) => {
        const todoItem = e.target.value
        handleInput(todoItem)
    }
 
    return (
        <div className='addtodo'>
            <input type="text" onChange={handleChange} />
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    )
}
export default AddTodo


