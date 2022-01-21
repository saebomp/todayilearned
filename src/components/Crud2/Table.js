import React, {Component} from 'react';


const Table = ({users, handleDelete, handleEdit}) => {

    
    return (
        <div style={{marginTop:'50px'}}>
            <ul>
                {users.map((user) => (
                    <li>
                        {user.firstname} {user.lastname} 
                        <button onClick={() => handleDelete(user.id)}>x</button>
                        <button onClick={() => handleEdit(user)}>edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Table

