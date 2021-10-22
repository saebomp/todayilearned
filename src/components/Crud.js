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
    }

    handleChange = (e) => {
        this.setState({ 
            newItem: e.target.value
        });
        console.log('handlechange', e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id:this.state.todos.length + 1,
                    status:'active',
                    item: this.state.newItem
                },
            ]
        });
            

        this.setState({ 
            newItem:''
        });
        // console.log('state', this.state.todos)
    }
    handleDelete = (id) => {
       const newTodos = this.state.todos.filter((todo) => todo.id !== id)
       this.setState(
            {
                todos:newTodos
            }
        )
    }

    handleEdit = () => {
        this.setState({
            editing:true
        })
    }


    render = () => {
        return (
            <div>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                        { this.state.editing ? (
                            <div>
                                <input 
                                    type="text" 
                                    value={this.state.newItem}
                                    onChange={this.handleChange}
                                />
                                <button type="submit">edit</button>
                                <button 
                                    type="submit" 
                                    onClick = {(e) => this.setState({editing: false})}>cancel</button>
                            </div>
                        ) : (
                            <div>
                                <input 
                                    type="text" 
                                    value={this.state.newItem}
                                    onChange={this.handleChange}
                                />
                                <button type="submit">add</button>
                            </div>
                        )
                        }
                    </form>
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
                                 onClick={() => this.handleEdit(todo.item)} 
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