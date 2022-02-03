import React, {Component} from 'react';

class Count2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        initialUser : {},
        users: [
            {
            id:1,
            firstname:'John',
            status:true},
            {
              id:2,
              firstname:'Doe',
              status:false}
        ],
        editing:false,
      }
    }

    handleCount = () => {
      this.setState({count: this.state.count + 1})
    }

    handleCheked = (index) => {
      const newUsers = [...this.state.users]
      newUsers[index].status = !this.state.users[index].status;
      this.setState({users:newUsers})
    }

    handleChange = (e) => {
      const {value} = e.target
      this.setState({initialUser: {...this.state.initialUser, id:this.state.users.length +1, firstname:value, status:false}})
    }

    handleSubmit = () => {
      this.setState({
        users: [
          ...this.state.users, this.state.initialUser
        ]
      })
    }

    handleDelete = (id) => {
      const deleteUser = this.state.users.filter((user) => user.id !== id)
      this.setState({users:deleteUser})
    }

render = () => {
    return (
        <>
        <div>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        {this.state.users.map((user, index) => (
          <div>
            <input type="checkbox" checked={user.status} onClick={() => this.handleCheked(index)} /> 
            {user.firstname}
            <button onClick={() =>this.handleDelete(user.id)}>x</button>
          </div>
        ))}
        </>
        );
    }
}
      
export default Count2;

