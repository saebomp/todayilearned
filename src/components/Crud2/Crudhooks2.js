import React, {useState} from 'react'

const Crudhooks2 = () => {

const usersData = [
    {id:1, firstname:'John', lastname:'Doe', checked:false},
    {id:2, firstname:'Weal', lastname:'Thy', checked:true},
]
const initialForm = {id:null, firstname:'', lastname:'', checked:false}

const [users, setUsers] = useState(usersData)
const [initial, setInitial] = useState(initialForm)

const handleChange = (e) => {
    const {name, value} = e.target
    setInitial({...initial, [name]:value})
}
const handleSubmit = (e) => {
    e.preventDefault();
    initial.id = initial.length + 1
    setUsers([...users, initial])
}
const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id))
}
const handleCheck = (index) => {
    const newUsers = [...users]
    newUsers[index].checked = !users[index].checked
    setUsers(newUsers)
}
return (
<div>
    <div>
        <label for="">Firstname</label>
        <input type="text" onChange={handleChange} name="firstname" /> 
        <label for="">Lastname</label>
        <input type="text" onChange={handleChange} name="lastname" />
        <button onClick={handleSubmit}>Submit</button>
    </div>
    <div style={{marginTop:'50px'}}>
        {users.map((user, index) => (
            <div>
                <span><input type="checkbox" checked={user.checked} onClick={() => handleCheck(index)} /></span>
                {user.firstname} {user.lastname} 
                <span><button onClick={() => handleDelete(user.id)}>x</button></span>
                <span><button>edit</button></span>
            </div>
        ))}
    </div>
</div>
    )
}


export default Crudhooks2