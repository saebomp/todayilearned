import React, {useState} from 'react'

const Counthooks2 = () => {

const usersData = [
    {id:1, firstname:'John', checked:false},
    {id:2, firstname:'Weal', checked:true},
]
const initialData = [{id:'', firstname:'', checked:false}]

const [users, setUsers] = useState(usersData)
const [status, setStatus] = useState()
const [initial, setInitial] = useState(initialData)

const handleCheck = (index) => {
    const newUser = [...users]
    newUser[index].checked = !users[index].checked;
    setUsers(newUser)
}
const handleChange = (e) => {
    const {value} = e.target;
    setInitial({...initial, id:users.length, firstname:value, checked:false})
}
const handleSubmit = () => {
    setUsers([...users, initial])
}

return (
    <div>
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>제출</button>
        </div>
        {users.map((user, index) => (
            <div><input type="checkbox" onClick={() => handleCheck(index)} checked={user.checked} />
            {user.firstname}
            <button>x</button>
            </div>
        ))}
    </div>
    )
}


export default Counthooks2