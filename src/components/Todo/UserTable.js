import React, {useState, useEffect} from 'react';

const styles = {
  table: {
    width: '600px',
    marginTop:'30px',
    textAlign:'center',
    fontSize:'20px',
  },
  td: {
    borderBottom:'1px solid #eee',
    padding:'10px 0',
    lineHeight:1
  }
}

const UserTable = ({users}) => {
  return (
  <div>
    <table style={styles.table}>
      <thead>
        <th style={styles.td}>Name</th>
        <th style={styles.td}>User Name</th>
        <th style={styles.td}>Actions</th>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
          <tr key={user.id}>
            <td style={styles.td}>{user.name}</td>
            <td style={styles.td}>{user.username}</td>
            <td style={styles.td}>button</td>
          </tr>
        ))
        ) : (
          <tr>
            <td colSpan={3}></td>
          </tr>
        )
      }
      </tbody>
    </table>
  </div>
  )
}

export default UserTable