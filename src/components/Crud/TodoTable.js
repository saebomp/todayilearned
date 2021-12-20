import React, {Component} from 'react';

const styles = {

}

const TodoTable = ({todo, handleDelete, handleInitialTodo}) => {
    const handleEdit = (todo) => {
        handleInitialTodo(todo)
    }

    return (
        <table className='table'>
            {todo.map(list => (
            <tr>
                <td><input type="checkbox" checked={list.active} /></td>
                <td>{list.item}</td>
                <td className='tdl'>
                    <button className="btn" onClick={() => handleDelete(list.id)}>x</button>
                    <button className="btn" onClick={()=> handleEdit(list)}>Edit</button>
                </td>
            </tr>
            ))}
        </table>
    )
}
export default TodoTable