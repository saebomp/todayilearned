import React, {Component} from 'react';


class Crud extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
            {
                status:'active',
                item:'Study CRUD'
            },
            {
                status:'inactive',
                item:'Shop Grocery'
            },
        ]
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({item:e.taret.value})
    }
    handleSubmit = (e) => {
        let todo;
        e.preventDefault();
        if(this.state.item == ''){
            return;
        }else {
            todo = {item:this.state.item, status:'active'}
        }
        this.setState({todos:[...this.state.todos, todo], item:''});

    }

    render = () => {
        return (
            <div>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.todos.item}
                        onChange={this.handleChange}
                    />
                    <input type="submit" />
                    </form>
                </div>
                <div>
                    {this.state.todos.map((todo)  => (
                        <li>{todo.item}</li>
                    ))}
                </div>
            </div>
        );
      };
    }
      
export default Crud;

// https://www.kirupa.com/react/simple_todo_app_react.htm