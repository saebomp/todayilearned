import React, {Component} from 'react';

const styles = {
    table: {
        margin:'20px auto',
        width:'50%'
    },
}

const TodoTable = ({todo}) => {
  
    return (
        <table style={styles.table}>
            {todo.map(list => (
            <tr>
                <td><input type="checkbox" checked={list.active} /></td>
                <td>{list.item}</td>
                <td>x</td>
                <td>cancel</td>
            </tr>
            ))}
        </table>
    )
}
export default TodoTable