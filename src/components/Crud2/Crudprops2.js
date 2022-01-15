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
        console.log(this.state.initial)
    }
    handleSubmit = (e) => {
        if(!this.state.initial == ''){
        this.setState({
            users : [...this.state.users,this.state.initial],
            initial:{...this.state.initial, firstname:'', lastname:''}
        })}
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
                />
            </div>
        )
    }
}

export default Crudprops2