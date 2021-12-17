import React, {Component} from 'react';

const styles = {

}

const AddTodo = ({todo, handleAdd, newItem}) => {
    const handleChange = (event) => {
        this.setState ({newItem: event.target.value})
        console.log(newItem)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    return (
        <div className='addtodo'>
            <input type="text" onChange={handleChange} />
            <button onSubmit={handleSubmit}>Submit</button>
        </div>
    )
}
export default AddTodo


