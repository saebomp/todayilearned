import React, {Component} from 'react';

class Crud2 extends Component {
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
        newUser : {},
        editing:false,
        initialUser : {}
      }
    }
handleChange = (e) => {
    const {name, value} = e.target
    this.setState({newUser: {...this.state.newUser, [name]:value}})
}
handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.newUser.firstname == '' && !this.state.newUser.lastname == ''){
    this.setState({
        users : [
            ...this.state.users,
            {
                id:this.state.users.length + 1,
                firstname:this.state.newUser.firstname,
                lastname:this.state.newUser.lastname
            }
        ]
    })
    } else {}
    this.setState({newUser:{}})
}
handleDelete = (id) => {
    console.log(id)
    const newUsers = this.state.users.filter((user) => user.id !== id)
    this.setState({users: newUsers})
}
handleEdit = (user) => {
    this.setState({editing:true, newUser: {}, initialUser: {...user}})
    console.log(this.state.initialUser)
}
handleInputChange = (e) => {
    const {name, value} = e.target
    this.setState({
        initialUser: {...this.state.initialUser, [name]:value}
    })
}
handleUpdate = (e) => {
    e.preventDefault()
    const updatedItem = this.state.users.map((user) => {
        return user.id === this.state.initialUser.id ? this.state.initialUser : this.state.users
    })
    this.setState({
        editing:false,
        users:updatedItem
    })
}
render = () => {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                {!this.state.editing ? (
                    <div>
                        <label for="">Firstname</label>
                        <input type="text" name="firstname" value={this.state.newUser.firstname} onChange={this.handleChange} /> 
                        <label for="">Lastname</label>
                        <input type="text" name="lastname"  value={this.state.newUser.lastname} onChange={this.handleChange} />
                        <button>Submit</button>
                    </div>
                ) : (
                    <div>
                        <label for="">Firstname</label>
                        <input type="text" name="firstname" value={this.state.initialUser.firstname} onChange={this.handleInputChange} /> 
                        <label for="">Lastname</label>
                        <input type="text" name="lastname"  value={this.state.initialUser.lastname} onChange={this.handleInputChange} />
                        <button onClick={()=> {this.setState({editing:false})}}>Cancel</button>
                        <button onClick={this.handleUpdate}>Update</button>
                    </div>
                )
                }
            </form>
            <table style={{marginTop:'50px'}}>
                {this.state.users.map((user, index) => (
                    <tr>
                        <td>{user.firstname} {user.lastname}</td>
                        <td><button onClick={() => this.handleDelete(user.id)}>x</button></td>
                        <td><button onClick={() => this.handleEdit(user)}>Edit</button></td>
                    </tr>
                ))}
            </table>
        </div>
        );
    }
}
      
export default Crud2;

