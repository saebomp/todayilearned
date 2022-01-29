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
    }
    ]})
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
handleUpdate = (e) => {
    e.preventDefault()
    const updatedUser = this.state.users.map(user => (user.id == this.initialUser.id))
    this.setState({
        editing:false,
        users:{}
    })
}
render = () => {
    return (
        <>
        {!this.state.editing ? (
            <div>
            <input type="text" placeholder="first name" onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit</button>
        </div> 
        ) : (
        <div>
            <input type="text" placeholder="first name" onChange={this.handleChange} />
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

