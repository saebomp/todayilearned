import React, {Component} from 'react';

const styles = {

}

const UpdateTodo = ({todo, handleCancle}) => {
    return (
        <div className='addtodo'>
            <input type="text" />
            <button onClick={() => handleCancle()}>Cancel</button>
            <button>Update</button>
        </div>
    )
}
export default UpdateTodo