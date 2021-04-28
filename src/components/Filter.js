import React from 'react';

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
  },
  td : {
    textAlign:'center',
    padding:'10px',
    borderRight:'1px solid #eee',
    borderBottom:'1px solid #eee',
    width:'50px'
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
  },
];

const Filter = () => {
  const sum = people.map(_age => _age.age).reduce((a, b) => a + b)

  return (
    <div style={styles.margin}>
      <table>
        {people.map((person, index) => (
          <tr>
            <td style={styles.td}>{index+1}</td>
            <td style={styles.td}>{person.name}</td>
            <td style={styles.td}>{person.age}</td>
            <td style={styles.td}>{person.gender}</td>
          </tr>
        ))} 
      </table>
      <h4 style={styles.h4}>People aged under 60</h4>
      {people.filter(person => person.age < 60).map(filteredName => (
        <li style={styles.list}>{filteredName.name}, {filteredName.age}</li>
      ))}
      <h4 style={styles.h4}>Male aged under 60</h4>
      {people.filter(person => person.age < 60).filter(gen => gen.gender === 'male').map(filteredName => (
        <li style={styles.list}>{filteredName.name}, {filteredName.gender}</li>
      ))}
      <h4 style={styles.h4}>Sum of ages</h4>
      <li style={styles.list}>Total : {sum}</li>
    </div>
  )
}
  
export default Filter


// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
// https://stackoverflow.com/questions/62358365/react-js-get-sum-of-numbers-in-array