import React, {Component} from 'react';

class Crud3 extends Component {
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

handleChange = (e) => {
    const {value} = e.target;
    this.setState({initialUser: {...this.state.initialUser, firstname:value}})
}
handleSubmit = (e) => {
    e.preventDefault();
    this.setState({users:[
        ...this.state.users,
        {id: this.state.users.length + 1,
        firstname:this.state.initialUser.firstname,
        status:false
    }],
    initialUser:{id:'', firstname:'', status:false}
    })
}
handleDelete = (id) => {
    const newUser = this.state.users.filter(el => el.id !== id)
    this.setState({
        users:newUser
    })
}
handleEdit = (user) => {
    this.setState({editing:true, initialUser: {...user}})
}
handleInputChange = (e) => {
    const {value} = e.target;
    this.setState({
        initialUser: {...this.state.initialUser, firstname:value}
    })
}
handleUpdate = (e) => {
    e.preventDefault();
    this.handleUpdateUser(this.state.initialUser.id, this.state.initialUser)
}

handleUpdateUser = (id, initialUser) => {
    const updatedItem = this.state.users.map((user) => {
        return user.id === id ? initialUser : user
    })
    this.setState({
        editing:false,
        users:updatedItem,
        initialUser:{id:'', firstname:'', status:false}
    })
}

render = () => {
    return (
        <>
        {!this.state.editing ? (
            <div>
            <input type="text" placeholder="first name" value={this.state.initialUser.firstname} onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit</button>
        </div> 
        ) : (
        <div>
            <input type="text" placeholder="first name" value={this.state.initialUser.firstname} onChange={this.handleInputChange} />
            <button onClick={() => this.setState({editing:false})}>Cancle</button>
            <button onClick={this.handleUpdate}>Update</button>
        </div> 
        )
        }    
        <div>
            {this.state.users.map(user => (
                <div>
                    <span><input type="checkbox" checked={user.status} /></span>
                    {user.firstname}
                    <span><button onClick={() => this.handleDelete(user.id)}>x</button></span>
                    <span><button onClick={() => this.handleEdit(user)}>edit</button></span>
                </div>
            ))}
        </div>
        </>
        );
    }
}
      
export default Crud3;

