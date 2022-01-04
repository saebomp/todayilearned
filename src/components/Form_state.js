import React, {Component} from 'react';
const styles = {
    container: {
    width:'30%',
    margin:'50px auto'
    },
    input : {
        padding:'2px',
        width:'100%',
        boxSizing:'border-box'
    },
    label : {
        margin:'10px 0',
        display:'block'
    },
    btn: {
        width:'100%',
        padding:'2px',
        marginTop:'20px'
    }
}

class Form_state extends Component {
    constructor(props) {
      super(props);
      this.state = {
          users : [
            {
                firstname:'',
                lastname:''
            }
        ],
        newUser: {}
      }
    }
handleSubmit = (e) => {
    e.preventDefault();
    this.setState({users:this.state.newUser})
    console.log(this.state.users)
}
handleChange = (e) => {
    const {name, value} = e.target
    this.setState({newUser: {[name]:value}})
    console.log(this.state.newUser)

}
render = () => {
    return (
        <div style={styles.container}>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label style={styles.label} for="firstname">firstname</label>
                    <input id="firstname" style={styles.input} type="text" name="firstname" onChange={this.handleChange} />
                </div>
                <div>
                    <label style={styles.label} for="lastname">lastname</label>
                    <input id="lastname" style={styles.input} type="text" name="lastname" onChange={this.handleChange} />
                </div>
                <button style={styles.btn}>Submit</button>
            </form>
            <div>
                {/* {this.state.users.map((item) => { */}
                <span>{this.state.users.firstname} {this.state.users.lastname}</span>
            {/* })} */}
            </div>
        </div>
        );
    }
}
      
export default Form_state;

