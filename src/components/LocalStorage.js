import React, {useState} from 'react';

const styles = {
  content: {
    margin:'10px'
  },
  list: {
    lineHeight:'2',
    width:'400px',
  },
  title:{
    marginBottom:'20px'
  },
  input: {
    padding:'10px',
    outline:'0',
    border:'1px solid #eee',
    marginTop:'10px',
    width:'302'
  },
  flex: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  btn: {
    padding:'5px',
    outline:'0',
    border:'1px solid #eee',
    marginLeft:'2px'
  }
}

const initialList = [
  {
    text: 'Studying',
    done: false,
  },
  {
    text: 'Drinking coffee',
    done: false,
  },
];

const List = ({lists, index, completeList, removeList} ) => {
  return (
    <li style={{ textDecoration: lists.done ? "line-through" : "none" }}>
      <div style={styles.flex}>
        <span>{lists.text}</span>
        <div>
          <span><button style={styles.btn} onClick={() => completeList(index)}>Complete</button></span>
          <span><button style={styles.btn} onClick={() => removeList(index)}>Remove</button></span>
        </div>
      </div>
    </li>
  )
}

const InputText = ({addLists}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addLists(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        style={styles.input}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button style={styles.input}>+ add list</button>
    </form>
  );
}



const LocalStorage = () => {
  const [lists, setLists] = useState(initialList);

  const addLists = text => {
    const newLists = [...lists, { text }];
    setLists(newLists);
  };

  const completeList = index => {
    const newLists = [...lists];
    if(!newLists[index].done) {
      newLists[index].done = true;
    } else {
      newLists[index].done = false
    }
    setLists(newLists);
  };

  const removeList = index => {
    const newLists = [...lists];
    newLists.splice(index,1);
    setLists(newLists)
  }

  return (
    <div style={styles.content}>
      <h2 style={styles.title}>Todo lists</h2>
      <ul style={styles.list}>
      {lists.map((lists, index) => (
        <List
          key={index}
          index={index}
          lists={lists}
          completeList={completeList}
          removeList={removeList}
        />
      ))}
      </ul>
      <InputText 
        addLists={addLists} 
      />
    </div>
    )
  }

  export default LocalStorage


//https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
