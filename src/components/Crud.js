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

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({item:e.target.value,status:'active'})
    }
    handleChange = (e) => {
        this.setState({item:e.target.value})
    }

    render = () => {
        return (
            <div>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange}/>
                        <button type="submit">Submit</button>
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

  //https://www.youtube.com/watch?v=s6KmBH1Ew4Q