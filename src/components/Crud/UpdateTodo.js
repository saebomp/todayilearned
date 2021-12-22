import React, {Component} from 'react';

const styles = {

}

const UpdateTodo = ({ handleCancle, initialTodo, handleTypeEdit, handleUpdate}) => {
    const handleInputChange = (e) => {
        e.preventDefault()
        console.log('e.target', e.target.value)
        handleTypeEdit(e.target.value)
    }

    return (
        <div className='addtodo'>
            <input type="text" value={initialTodo.item} onChange={handleInputChange} />
            <button onClick={() => handleCancle()}>Cancel</button>
            <button onClick={() => handleUpdate()}>Update</button>
        </div>
    )
}
export default UpdateTodo