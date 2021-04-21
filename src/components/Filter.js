import React, {useState, useEffect} from 'react';

const styles = {
  margin: {
    padding: '10px',
    marginTop:'10px'
  },
  list: {
    listStyle:'none'
  },
  h4 : {
    marginTop:'20px',
    marginBottom:'10px'
  }
}

const people = [
  {
    name: 'James',
    age: 31,
    gender:'male'
  },
  {
    name: 'John',
    age: 45,
    gender:'male'
  },
  {
    name: 'Paul',
    age: 65,
    gender:'male'
  },
  {
    name: 'Ringo',
    age: 49,
    gender:'unknown'
  },
  {
    name: 'George',
    age: 34,
    gender:'female'
  }
];

const Filter = () => {


  return (
    <div style={styles.margin}>
      <h4 style={styles.h4}>People aged under 60</h4>
      {people.filter(person => person.age < 60).map(filteredName => (
        <li style={styles.list}>{filteredName.name}, {filteredName.age}</li>
      ))}
      <h4 style={styles.h4}>Male aged under 60</h4>
      {people.filter(person => person.age < 60).filter(gen => gen.gender === 'male').map(filteredName => (
        <li style={styles.list}>{filteredName.name}, {filteredName.gender}</li>
      ))}
    </div>
  )
}
  
export default Filter


// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
