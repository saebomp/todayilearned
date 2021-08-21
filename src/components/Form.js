import React, {useState} from 'react';
import AddForm from './AddForm'

const styles = {
  form: {
    width: '500px',
    margin:'20px auto',
  },

}

const Form = () => {
  const inputData = [
    {id:null, title:'', message:''},
  ]

  const [data, setData] = useState(inputData)
  
  const addData = (msg) => {
    msg.id = data.length + 1
    setData([...data, msg])
  }

  return (
    <div style={styles.form}>
      <AddForm addData={addData} />
      <div>
        {data.map((el) => (
          <div>
            <h4>{el.title}</h4>
            <p>{el.message}</p>
          </div>
          ))}
      </div>
    </div>
  )
  }
  
export default Form
