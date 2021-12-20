import React, {Component} from 'react';

const styles = {

}

const UpdateTodo = ({todo, handleCancle, initialTodo}) => {
    const handleInputChange = (e) => {
        console.log(e)
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