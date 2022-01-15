import React, {useState} from 'react'

const Crudhooks2 = () => {

const usersData = [
    {id:1, firstname:'John', lastname:'Doe', checked:false},
    {id:2, firstname:'Weal', lastname:'Thy', checked:true},
]
const initialForm = {id:null, firstname:'', lastname:'', checked:false}

const [users, setUsers] = useState(usersData)
const [initial, setInitial] = useState(initialForm)
const [editing, setEditing] = useState(false)

const handleChange = (e) => {
    const {name, value} = e.target
    setInitial({...initial, [name]:value})
}
const handleSubmit = (e) => {
    e.preventDefault();
    if(initial.firstname == '' || initial.lastname == '') return
    initial.id = initial.length + 1
    setUsers([...users, initial])
    setInitial(initialForm)
}
const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id))
}
const handleCheck = (index) => {
    const newUsers = [...users]
    newUsers[index].checked = !users[index].checked
    setUsers(newUsers)
}
const handleEdit = (user) => {
    setEditing(true)
    setInitial({id:user.id, firstname:user.firstname, lastname:user.lastname, checked:user.checked})
}
const handleInputChange = (e) => {
    const {name, value} = e.target;
    setInitial({...initial, [name]:value})
    console.log('ddasd', initial)
}

const handleUpdate = (e) => {
    e.preventDefault();
    setEditing(false)
    setUsers(users.map((user) => (
        user.id === initial.id ? initial:user
    )))
}

const handleCancle = () => {
    setEditing(false)
}

return (
    <div>
        {!editing ? (
        <div>
            <label for="">Firstname</label>
            <input type="text" onChange={handleChange} value={initial.firstname} name="firstname" /> 
            <label for="">Lastname</label>
            <input type="text" onChange={handleChange} value={initial.lastname} name="lastname" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        ) : (
        <div>
            <form>
                <label for="">Firstname</label>
                <input type="text" onChange={handleInputChange} name="firstname" value={initial.firstname} /> 
                <label for="">Lastname</label>
                <input type="text" onChange={handleInputChange} name="lastname" value={initial.lastname} />
                <button onClick={handleCancle}>Cancle</button>
                <button onClick={handleUpdate}>Update</button>
            </form>
        </div>
        )
        }
        <div style={{marginTop:'50px'}}>
            {users.map((user, index) => (
                <div>
                    <span><input type="checkbox" checked={user.checked} onClick={() => handleCheck(index)} /></span>
                    {user.firstname} {user.lastname} 
                    <span><button onClick={() => handleDelete(user.id)}>x</button></span>
                    <span><button onClick={() => handleEdit(user)}>edit</button></span>
                </div>
            ))}
        </div>
    </div>
    )
}


export default Crudhooks2