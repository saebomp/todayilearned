import React, {Component} from 'react';

const styles = {

}

const TodoTable = ({todo, handleDelete, handleInitialTodo, handleToggle}) => {
    const handleEdit = (todo) => {
        handleInitialTodo(todo)
    }

    return (
        <table className='table'>
            {todo.map((list,index) => (
            <tr>
                <td>
                    <input 
                        type="checkbox" 
                        checked={list.active} 
                        onClick={() => handleToggle(index)} />
                    </td>
                <td>
                    <span style={list.active? {textDecoration:'line-through'} : null}>
                        {list.item}
                    </span>
                </td>
                <td className='tdl'>
                    <button 
                        className="btn" 
                        onClick={() => handleDelete(list.id)}>
                        x
                    </button>
                    <button className="btn" onClick={()=> handleEdit(list)}>Edit</button>
                </td>
            </tr>
            ))}
        </table>
    )
}
export default TodoTable