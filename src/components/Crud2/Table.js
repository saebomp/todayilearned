import React, {Component} from 'react';


const Table = ({users, handleDelete}) => {

    return (
        <div style={{marginTop:'50px'}}>
            <ul>
                {users.map((user) => (
                    <li>
                        {user.firstname} {user.lastname} 
                        <button onClick={() => handleDelete(user.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Table

