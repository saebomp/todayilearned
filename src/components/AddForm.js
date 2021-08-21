import React, {useState} from 'react';

const styles = {
  label: {
    display:'block',
    marginBottom:'10px',
  },
  input: {
    width: '100%',
    padding:'10px',
    border:'1px solid #dedede',
    borderRadius:'5px',
    boxSizing:'border-box',
    fontFamily:'Helvetica',
  },
  boxstyle: {
    marginBottom:'20px',
  },
  btn: {
    width:'100%',
    padding:'10px',
    textAlign:'center'
  },
  bg: {
    background:'rgba(0,0,0,0.5)',
    width:'100%',
    height:'100vh',
    top:'0',
    left:'0',
    position:'absolute',
  },
  modal : {
    width:'300px',
    padding:'40px',
    textAlign:'center',
    position:'absolute',
    top:'100px',
    left:'50%',
    transform:'translateX(-50%)',
    background:'#fff',
    borderRadius:'5px',
    boxShadow:'5px 5px 10px #333',
  },
  close: {
    position:'absolute',
    top:'10px',
    right:'10px',
    fontWeight:'bold',
    fontSize:'15px',
    cursor:'pointer',
  }
}

const AddForm = (props) => {

  const initialFormState = {id:null, title:'', message:''}
  const [msg, setMsg] = useState(initialFormState)
  const [modal, setModal] = useState(false)

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setMsg({...msg,[name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(msg.title && msg.message) {
      props.addData(msg)
      setMsg(initialFormState)
    } else {
      setModal(true);
    }
  }

  return (
    <div>
      <form
      onSubmit={handleSubmit}
      >
      <div style={styles.boxstyle}>
        <label for="input" style={styles.label}>Title</label>
        <input 
          id="input"
          type="text" 
          name="title" 
          value={msg.title}
          placeholder="Title"
          style={styles.input}
          onChange={handleInputChange}
        />
      </div>
      <div style={styles.boxstyle}>
        <label for="textarea" style={styles.label}>Message</label>
        <textarea
          id="textarea" 
          type="text" 
          name="message" 
          placeholder="Your message"
          value={msg.message}
          style={styles.input}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button style={styles.btn}>Submit</button>
      </div>
      </form>
      {modal ? (
        <div style={styles.bg}>
          <div style={styles.modal}>
            Please enter a valid value
            <a 
              style={styles.close}
              onClick={() => setModal(false)}
            >x
            </a>
          </div>
        </div>
      ):
      null
      }
    </div>
  )
  }
  
export default AddForm
