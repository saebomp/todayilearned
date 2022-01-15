import React, {Component} from 'react';


const Form = ({handleInput, handleSubmit, initial}) => {

    const handleChange = (e) => {
        const {name, value} = e.target;
        handleInput(name, value)
    }
 
    return (
        <div>
            <label for="">Firstname</label>
            <input type="text" name="firstname" value={initial.firstname} onChange={handleChange} /> 
            <label for="">Lastname</label>
            <input type="text" name="lastname" value={initial.lastname} onChange={handleChange} />
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    )
}
export default Form

