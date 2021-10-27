import React, {Component} from 'react';
const styles = {
    list: {
        listStyle:'none',
        display:'flex',
    },
    btn: {
        paddingBottom:'3px',
        width:'20px',
        marginLeft:'10px',
        cursor:'pointer'
    },
}
class Crud extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newItem:'',
        updateItem:'',
        initialTodos:{},
        todos: [
            {   
                id:1,
                status:'active',
                item:'Study CRUD'
            },
            {
                id:2,
                status:'inactive',
                item:'Shop Grocery'
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
    }

    handleChange = (e) => {
        this.setState({ 
            newItem: e.target.value
        });
        console.log('handlechange', e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.newItem =='') { 
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id:this.state.todos.length + 1,
                    status:'active',
                    item: this.state.newItem
                },
            ]
        })
        } else {} 

        this.setState({ newItem:'' });
    }
    handleDelete = (id) => {
       const newTodos = this.state.todos.filter((todo) => todo.id !== id)
       this.setState( { todos: newTodos} )
    }
    /***********update****************/

    handleUpdate = ((e) => {
        e.preventDefault();
        console.log('iddddddddddddd', e)
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
        // console.log('initialTodosinitialTodosinitialTodos', this.state.initialTodos)
    }
  
    render = () => {
        return (
            <div>
                <div className="input">
                    { this.state.editing ? (
                        <form onSubmit={this.handleUpdate}>
                            <div>
                                <input 
                                    type="text" 
                                    value={this.state.initialTodos.item}
                                    onChange={this.handleInputEdit}
                                />
                                <button type="submit">edit</button>
                                <button 
                                    type="submit" 
                                    onClick = {(e) => this.setState({editing: false,  newItem:''})}>cancel</button>
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
                                <button type="submit">add</button>
                            </div>
                        </form>
                        )
                    }
                </div>
                <div>
                    {this.state.todos.map((todo)  => (
                        <li style={styles.list}>
                            {todo.item}
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
                        </li>
                    ))}
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