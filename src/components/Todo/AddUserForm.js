import React, {useState} from 'react';

const styles = {
  margin: {
    marginTop:'30px',
  },
  label : {
    margin:'0 10px'
  },
  input : {
    border:'1px solid #eee',
    padding:'5px'
  },
  btn : {
    padding:'5px',
    marginLeft:'5px'
  }
}

const AddUserForm = (props) => {
  const initialFormState = {id:null, name:'', username:''}
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    console.log(event);
    const {name, value} = event.target
    setUser({...user,[name]:value})
    //name (name, username)과 value (input 에 입력한값)을 둘다 가져와서 setUser 해줌
  }
  const handleSubmit = (event) => {
    console.log('handelsubmit', event);
    event.preventDefault();
    if(!user.name || !user.username) return
      props.addUser(user)
      setUser(initialFormState)
  }
  return (
    <form 
      style={styles.margin}
      onSubmit={handleSubmit}
    >
      <label style={styles.label}>Name</label>
      <input 
        type="text" 
        name="name" 
        value={user.name}
        style={styles.input}
        onChange={handleInputChange}
      />
      <label style={styles.label}>Username</label>
      <input 
        type="text" 
        name="username" 
        value={user.username}
        style={styles.input}
        onChange={handleInputChange}
      />
      <button style={styles.btn}>Add new user</button>
    </form>
  )
  }
  
export default AddUserForm

