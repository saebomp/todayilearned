import React, {useState, useEffect} from 'react';
import UserTable from './UserTable'

const styles = {
  margin: {
    padding: '10px',
    marginTop:'10px',
  },
}

const AddTodo = () => {

  const usersData = [
    {id:1, name:'Anne', username:'anneisgenius'},
    {id:2, name:'Bob', username:'bobisbob'},
    {id:3, name:'Cindy', username:'cindya'},
  ]
  const initialFormState = {id:null, name:'', username:''}
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurretUser] = useState(initialFormState)



  return (
   <div style={styles.margin}>
     <h2>View Users</h2>
     <UserTable
      users={users}
     />
   </div>
  )
  }
  
export default AddTodo

// https://taniarascia.github.io/react-hooks/
// https://www.taniarascia.com/crud-app-in-react-with-hooks/
