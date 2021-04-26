import React, {useState} from 'react';

const styles = {
  margin: {
    padding: '10px',
    marginTop:'10px',
  },

}

const Formwave = () => {
  let user_inputs = ['Email', 'Password'];
  let email = user_inputs.map(function(user_input, index){
    if (index === 0) {
      return <span>{user_input}</span>
    }
});
let password = user_inputs.map(function(user_input, index){
  if (index === 1) {
    return <span>{user_input}</span>
  } else {
  }
});

  return (
    <div className="form">
      <div className="container">
        <p>Please Login</p>
          <form className="formdiv">
            <div className="form-control">
              <input 
                onClick={(e) => {
                  console.log('Focused on input');
                }}
                type="text" required 
              />
              
              <label>{email}</label>
            </div>
            <div className="form-control">
              <input type="password" required />
              <label>{password}</label>
            </div>
            <button className="btn">Login</button>
            <p className="text">Don't have an account? <a href="#">Register</a> </p>
          </form>
      </div>
    </div>
  )
  }
  
export default Formwave

{/* https://github.com/bradtraversy/50projects50days/blob/master/form-input-wave/index.html */}