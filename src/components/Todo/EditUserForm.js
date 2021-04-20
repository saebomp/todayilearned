import React, {useState, useEffect} from 'react';

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

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange =(event)=> {
    console.log(event);
    const {name, value} = event.target;
    setUser({...user, [name]:value})
  }

  const handleSubmit = (event) => {
    console.log('handelsubmit', event);
    event.preventDefault();
    props.updateUser(user.id, user)
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
      <button style={styles.btn}>Update user</button>
      <button style={styles.btn}>Cancel</button>
    </form>
  )
  }
  
export default EditUserForm

