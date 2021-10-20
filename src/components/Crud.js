import React, {Component} from 'react';


class Crud extends Component {
    constructor(props) {
      super(props);
      this.state = {
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
        ]
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ 
            item: e.target.value
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
                    item: this.state.item
                },
            ]
        });
        console.log('state', this.state.todos)
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
                        <button type="submit">add</button>
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

// https://inventive.io/insights/create-a-simple-todo-list-with-react/