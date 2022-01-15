import React, {Component} from 'react';


const Table = ({users}) => {

    return (
        <div style={{marginTop:'50px'}}>
            <ul>
                {users.map((user) => (
                    <li>{user.firstname} {user.lastname}</li>
                ))}
            </ul>
        </div>
    )
}
export default Table

