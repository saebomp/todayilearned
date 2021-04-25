import React, {useState} from 'react';

const styles = {
  margin: {
    padding: '10px',
    marginTop:'10px',
  },

}

const Formwave = () => {
 
  return (
    <div className="form">
      <div className="container">
        <h1>Please Login</h1>
          <form className="formdiv">
            <div className="form-control">
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className="form-control">
              <input type="password" required />
              <label>Password</label>
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