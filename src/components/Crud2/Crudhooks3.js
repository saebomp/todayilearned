import React, {useState} from 'react'

const Crudhooks2 = () => {

const usersData = [
    {id:1, firstname:'John', checked:false},
    {id:2, firstname:'Weal', checked:true},
]

const initialUser = {id:null, firstname:'', checked:false}

const [users, setUsers] = useState(usersData)
const [initial, setInitial] = useState(initialUser)
const [editing, setEditing] = useState(false)

const handleChange = (e) => {
    const {value} = e.target
    setInitial({...initial, firstname:value})
}

const handleSubmit = (e) => {
    e.preventDefault();
    initial.id = initial.length + 1
    setUsers([...users, initial])
    setInitial(initialUser)
}

const handleDelete = (id) => {
    const deleteUser = users.filter((user) => (user.id !== id))
    setUsers(deleteUser)
}

const handleEdit = (user) => {
    setEditing(true)
    setInitial({id:user.id, firstname:user.firstname, checked:user.checked})
}

const handleCancle = () => {
    setEditing(false)
}
const handleInputChange = (e) => {
    const {value} = e.target;
    setInitial({...initial, firstname:value})
}
const handleUpdate = (e) => {
    e.preventDefault();
    setEditing(false)
    setUsers(users.map((user) => (
        user.id === initial.id ? initial:user
    )))
    setInitial(initialUser)
}

return (
    <div>
        {!editing ? (
        <div>
            <label for="">Firstname</label>
            <input type="text" onChange={handleChange} name="firstname" /> 
            <button onClick={handleSubmit}>Submit</button>
        </div>
         ) : ( 
        <div>
            <form>
                <label for="">Firstname</label>
                <input type="text" value={initial.firstname} onChange={handleInputChange} name="firstname" value={initial.firstname} /> 
                <button onClick={handleCancle}>Cancle</button>
                <button onClick={handleUpdate}>Update</button>
            </form>
        </div>
        )
        }
        <div style={{marginTop:'50px'}}>
            {users.map(user => (
                <div>
                    <input type="checkbox" checked={user.checked} />{user.firstname}
                    <button onClick={() => handleDelete(user.id)}>x</button>
                    <button onClick={() => handleEdit(user)}>edit</button>
                </div>
            ))}
        </div>
    </div>
    )
}


export default Crudhooks2