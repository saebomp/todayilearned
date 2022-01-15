import React, {Component} from 'react';
import Form from './Form'
import Table from './Table'

class Crudprops2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users : [
          {
              id:1,
              firstname:'Hell',
              lastname:'Yes'
          }
        ],
        initial : {}
        }
    }
    handleInput = (name, value) => {
        this.setState({initial: {...this.state.initial, id:this.state.users.length + 1, [name]: value}})
    }
    handleSubmit = (e) => {
        if(!this.state.initial.firstname == '' && !this.state.initial.lastname == ''){
        this.setState({
            users : [...this.state.users,this.state.initial],
            initial:{...this.state.initial, id:'', firstname:'', lastname:''}
        })}
    }
    handleDelete = (id) => {
        const newUser = this.state.users.filter((user) => user.id ==! id)
        this.setState({users:newUser})
    }

    render = () => {
        return (
            <div>
                <Form
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    initial={this.state.initial}
                />

                <Table
                    users={this.state.users}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default Crudprops2