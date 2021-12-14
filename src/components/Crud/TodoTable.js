import React, {Component} from 'react';

const styles = {
    table: {
        margin:'20px auto',
        width:'50%'
    },
}

const TodoTable = () => {
  
    return (
        <table style={styles.table}>
            <tr>
                <td><input type="checkbox" /></td>
                <td>todolist</td>
                <td>x</td>
                <td>cancel</td>
            </tr>
        </table>
    )
}
export default TodoTable