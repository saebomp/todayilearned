import React, {Component} from 'react';

const styles = {
    table: {
        margin:'20px auto',
        width:'50%'
    },
}

const AddTodo = ({todo}) => {
    return (
        <div>
            <input type="text" />
            <button>Submit</button>
        </div>
    )
}
export default AddTodo