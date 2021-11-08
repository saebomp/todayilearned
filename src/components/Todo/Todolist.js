import React, {useState} from 'react';
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

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
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
    console.log(users)
    //AddUserForm.js에서 props.addUser(user)로 addUser에 user를 보내줌. 
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const updateUser = ((id, updateUser) => {
    setEditing(false)
    console.log('updateUser', updateUser)
    setUsers(users.map((user) =>(
      user.id === id ? updateUser:user
    )))
  }
  )

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({id:user.id, name:user.name, username:user.username})
  }

  return (
  <div style={styles.margin}>
    {editing ? (
    <div>
      <h2>Edit Users</h2>
      <EditUserForm
        editing={editing}
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
    ) : (
    <div>
      <h2>View Users</h2>
      <AddUserForm
        addUser={addUser}
        />
    </div>
    )
  }
    <UserTable
      users={users}
      deleteUser={deleteUser}
      editRow={editRow}
    />
    {/* pass props (userdata) to UserTable */}
  </div>
  )
  }
  
export default AddTodo

// https://taniarascia.github.io/react-hooks/
// https://www.taniarascia.com/crud-app-in-react-with-hooks/
