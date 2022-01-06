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
        newUser : {}
      }
    }
handleChange = (e) => {
    const {name, value} = e.target
    this.setState({newUser: {...this.state.newUser, [name]:value}})
}
handleSubmit = (e) => {
    e.preventDefault();
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
}
render = () => {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label for="">Firstname</label>
                    <input type="text" name="firstname" onChange={this.handleChange} /> 
                    <label for="">Lastname</label>
                    <input type="text" name="lastname" onChange={this.handleChange} />
                    <button>Submit</button>
                </div>
            </form>
            <table style={{marginTop:'50px'}}>
                {this.state.users.map((user) => (
                    <tr>
                        <td>{user.firstname} {user.lastname}</td>
                        <td><button>x</button></td>
                    </tr>
                ))}
            </table>
        </div>
        );
    }
}
      
export default Crud2;

