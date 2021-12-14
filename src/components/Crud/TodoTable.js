import React, {Component} from 'react';

const styles = {

}

const TodoTable = ({todo}) => {
  
    return (
        <table className='table'>
            {todo.map(list => (
            <tr>
                <td><input type="checkbox" checked={list.active} /></td>
                <td>{list.item}</td>
                <td className='tdl'>
                    <button className="btn">x</button>
                    <button className="btn">cancel</button>
                </td>
            </tr>
            ))}
        </table>
    )
}
export default TodoTable