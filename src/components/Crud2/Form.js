import React, {Component} from 'react';


const Form = ({handleInput, handleSubmit, initial, editing, handleCancle, handleTypeEdit, handleUpdate}) => {

    const handleChange = (e) => {
        const {name, value} = e.target;
        handleInput(name, value)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        handleTypeEdit(name, value)
    }
 
    return (
        <>
        {!editing ? (
        <div>
            <label for="">Firstname</label>
            <input type="text" name="firstname" value={initial.firstname} onChange={handleChange} /> 
            <label for="">Lastname</label>
            <input type="text" name="lastname" value={initial.lastname} onChange={handleChange} />
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>
        ) : (
            <div>
            <label for="">Firstname</label>
            <input type="text" name="firstname" value={initial.firstname} onChange={handleInputChange} /> 
            <label for="">Lastname</label>
            <input type="text" name="lastname" value={initial.lastname} onChange={handleInputChange} />
            <button onClick={() =>handleUpdate()}>Update</button>
            <button onClick={handleCancle}>Cancel</button>
        </div>
        )
        }
        </>
    )
}
export default Form

