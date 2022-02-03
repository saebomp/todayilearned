import React, {Component} from 'react';

class Crud4 extends Component {
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
    const {value} = e.target
    this.setState({initialUser:{...this.state.initialUser, id: this.state.users.length +1, firstname:value, status:false}})
}
handleSubmit = (e) => {
    e.preventDefault()
    if(!this.state.initialUser.firstname === ''){
    this.setState({
        users:[...this.state.users,{...this.state.initialUser} ]
    })}
}

handleDelete = (id) => {
    const deleteUser = this.state.users.filter((user) => user.id !== id)
    this.setState({users:deleteUser})
}
handleEdit = (el) => {
    this.setState({
        editing:true,
        initialUser:{...this.state.initialUser, id:el.id, firstname:el.firstname, status:el.status}
    })   
}
handleInputChange = (e) => {
    const {value} = e.target;
    this.setState({initialUser:{...this.state.initialUser, firstname:value}})
    console.log(this.state.initialUser)
}
handleUpdate = () => {
    const updatedTodo = this.state.users.map((user) => {
        return user.id === this.state.initialUser.id ? this.state.initialUser : user
    })
    this.setState({
        editing:false,
        users:updatedTodo,
        initialUser:{...this.state.initialUser, id:'', firstname:'', status:''}
    })
}
handleStatus= (index) => {
    const newUser = [...this.state.users];
    newUser[index].status = !this.state.users[index].status;
    this.setState({users:newUser})
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
            <button onClick={() => this.setState({editing:false, initialUser:{...this.state.initialUser, id:'', firstname:'', status:''}},)}>Cancle</button>
            <button onClick={this.handleUpdate}>Update</button>
        </div> 
        )
        }    
        <div>
            {this.state.users.map((el,index )=> (
                <div><input type='checkbox' checked={el.status} onClick={() => this.handleStatus(index)} />{el.firstname}
                <button onClick={() => this.handleDelete(el.id)}>x</button>
                <button onClick={() => this.handleEdit(el)}>edit</button>
                </div>
            ))}
        </div>
        </>
        );
    }
}
      
export default Crud4;

