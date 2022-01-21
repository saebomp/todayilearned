import { findAllByDisplayValue } from '@testing-library/react';
import React, {Component} from 'react';
import TodoTable from '../Crud/TodoTable';
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
        initial : {},
        editing:false
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
        const newUser = this.state.users.filter((user) => user.id !== id)
        this.setState({users:newUser})
    }
    handleEdit = (user) => {
        this.setState({editing:true, initial: {...user}})
    }
    handleCancle = () => {
        this.setState({editing:false, initial:{...this.state.initial, id:'',firstname:'', lastname:''}})
        console.log(this.state.initial)
    }
    handleTypeEdit = (name, value) => {
        this.setState({initial:{...this.state.initial, [name]:value}})
    }
    handleUpdate = () => {
        const EditedUser = this.state.users.map((user) => {
            return user.id = this.state.initial.id ? this.state.initial : this.state.users
        })
        this.setState({
            editing:false,
            users:EditedUser,
            initial:{...this.state.initial, id:'',firstname:'', lastname:''}
        })
    }
    render = () => {
        return (
            <div>
                <Form
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    initial={this.state.initial}
                    editing={this.state.editing}
                    handleCancle={this.handleCancle}
                    handleTypeEdit={this.handleTypeEdit}
                    handleUpdate={this.handleUpdate}
                />

                <Table
                    users={this.state.users}
                    handleDelete={this.handleDelete}
                    editing={this.state.editing}
                    handleEdit={this.handleEdit}
                />
            </div>
        )
    }
}

export default Crudprops2