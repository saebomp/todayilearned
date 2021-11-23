import React, {Component} from 'react';
const styles = {
    container: {
        margin:'20px auto',
        maxWidth:'50%'
    },
    list: {
        listStyle:'none',
        display:'flex',
        alignItem:'center'
    },
    btn: {
        paddingBottom:'3px',
        width:'20px',
        marginLeft:'10px',
        cursor:'pointer'
    },
    chbox: {
        marginRight:'5px',
    },
    inactive: {
        textDecoration:'underline'
    },
    td1 : {
        width:'40%',
        textAlign:'left'
    },
    td2 : {
        width:'50%',
        textAlign:'center',
    },
    td3 : {
        width:'15%',
        textAlign:'center',
    }
}
class Crud extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newItem:'',
        newType:'',
        updateItem:'',
        initialTodos:{},
        todos: [
            {   
                id:1,
                checked: false,
                item:'Study CRUD',
                category:'Work'
            },
            {
                id:2,
                checked: false,
                item:'Shop Grocery',
                category:'Health'
            },
            {
                id:3,
                checked: false,
                item:'Shop Grocery',
                category:'School'
            },
        ],
        editing:false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleInputEdit = this.handleInputEdit.bind(this);
      this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
      this.handleStatus = this.handleStatus.bind(this);
      this.getType = this.getType.bind(this);
    }

    handleChange = (e) => {
        this.setState({ 
            newItem: e.target.value
        });
        console.log('handlechange', e.target.value)
    }

    getType = (e) => {
        this.setState({ 
            newType: e.target.value
        });
        console.log(e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.newItem =='' && !this.state.newType == '') { 
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id:this.state.todos.length + 1,
                    checked:false,
                    category:this.state.newType,
                    item: this.state.newItem
                },
            ]
        })
        } else {} 
        this.setState({ newItem:''});
    }
    handleDelete = (id) => {
       const newTodos = this.state.todos.filter((todo) => todo.id !== id)
       this.setState( { todos: newTodos} )
    }
    /***********update****************/

    handleUpdate = ((e) => {
        e.preventDefault();
        console.log('id', e)
        this.handleUpdateTodo(this.state.initialTodos.id, this.state.initialTodos);
   
    })
    handleUpdateTodo = ((id, updateTodo) => {
        const updatedItem = this.state.todos.map((todo) => {
            return todo.id === id ? updateTodo : todo
        })
        
        this.setState({
            editing:false,
            todos:updatedItem
        })
    })
    handleEdit = (todo) => {
        this.setState({ 
            editing:'true',
            initialTodos:{...todo}
        })
    }

    handleInputEdit = (e) => {
        e.preventDefault();
        const {value} = e.target;
        this.setState({ 
            initialTodos: {...this.state.initialTodos, item:value}
        })  
    }
    
    // handleTypeEdit = (e) => {
    //     e.preventDefault();
    //     const {value} = e.target;
    //     console.log('handleTypeEdit', value)
    //     this.setState({  initialTodos: {...this.state.initialTodos, category:value}})
    // }

    handleStatus = (index) => {
      const newTodos = [...this.state.todos];
      newTodos[index].checked = !this.state.todos[index].checked;
    //   console.log(newTodos[index].checked)
      this.setState( { todos: newTodos} )
    }
    

    render = () => {
        return (
            <div style={styles.container} className="crud">
                <div className="input">
                    { this.state.editing ? (
                        <form onSubmit={this.handleUpdate}>
                            <div>
                                <input 
                                    type="text" 
                                    value={this.state.initialTodos.item}
                                    onChange={this.handleInputEdit}
                                />
                                <select onClick={this.handleTypeEdit}>
                                    <option>Select a Category</option>
                                    {this.state.todos.map((todo, index)  => (
                                        <option value={todo.category}>{todo.category}</option>
                                    ))}
                                </select>
                                <button type="submit">edit</button>
                                <button 
                                    type="submit" 
                                    onClick = {(e) => this.setState({editing: false,  newItem:''})}>cancel
                                </button>
                            </div>
                        </form>
                        ) : (
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input 
                                    type="text" 
                                    value={this.state.newItem}
                                    onChange={this.handleChange}
                                />
                                <select onClick={this.getType}>
                                    <option>Select a Category</option>
                                    {this.state.todos.map((todo, index)  => (
                                        <option value={todo.category}>{todo.category}</option>
                                    ))}
                                </select>
                                <button type="submit">add</button>
                            </div>
                        </form>
                        )
                    }
                </div>
                <div>
                    <table>
                    {this.state.todos.map((todo, index)  => (
                        <tr 
                        style={styles.list}
                        className={ todo.checked ? 'inactive' : '' }
                        >
                            <td>
                                <input 
                                    type="checkbox" 
                                    style={styles.chbox}
                                    checked={todo.checked} 
                                    onClick={() => this.handleStatus(index)}
                                />
                            </td>
                            <td style={styles.td1}>
                                {todo.item}
                            </td>
                            <td style={styles.td3}>
                                {todo.category}
                            </td>
                            <td style={styles.td3}>
                                <span>
                                    <img
                                        onClick={() => this.handleDelete(todo.id)} 
                                        style={styles.btn} 
                                        src="https://img.icons8.com/material-outlined/24/000000/close-window.png"/>
                                </span>
                                <span>
                                    <img
                                        onClick={() => this.handleEdit(todo)} 
                                        style={styles.btn} 
                                        src="https://img.icons8.com/material/24/000000/edit--v1.png"/>
                                </span>
                            </td>
                        </tr>
                    ))}
                    </table>
                </div>
            </div>
        );
      };
    }
      
export default Crud;

// https://inventive.io/insights/create-a-simple-todo-list-with-react/
// https://codepen.io/TiffanyCJanzen/pen/EpzVzR
// https://icons8.com/
// https://dev.to/joelynn/how-to-build-a-react-crud-todo-app-edit-todo-46g6
// https://towardsdatascience.com/build-a-simple-todo-app-using-react-a492adc9c8a4