import React, {Component} from 'react';

const styles = {

}

const AddTodo = ({handleInput, handleSubmit}) => {

    const handleChange = (e) => {
        const todoItem = e.target.value
        handleInput(todoItem)
    }
    const handleInputSubmit = (e) => {
        e.preventDefault();
        console.log('eeeeeeee', e)
        handleSubmit(e)
    }
 
    return (
        <div className='addtodo'>
            <input type="text" onChange={handleChange} />
            <button onSubmit={handleInputSubmit}>Submit</button>
        </div>
    )
}
export default AddTodo


