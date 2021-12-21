import React, {Component} from 'react';

const styles = {

}

const UpdateTodo = ({todo, handleCancle, initialTodo, handleTypeEdit}) => {
    const handleInputChange = (e) => {
        e.preventDefault()
        console.log('e.target', e.target.value)
        handleTypeEdit(e.target.value)
    }
    return (
        <div className='addtodo'>
            <input type="text" value={initialTodo.item} onChange={handleInputChange} />
            <button onClick={() => handleCancle()}>Cancel</button>
            <button>Update</button>
        </div>
    )
}
export default UpdateTodo