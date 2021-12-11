import React, {Component} from 'react';
const styles = {
    table: {
        margin:'20px auto',
        width:'50%'
    },
}

class Crudprops extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }


render = () => {
    return (
        <div>
            <table style={styles.table}>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>todolist</td>
                    <td>x</td>
                    <td>cancel</td>
                </tr>
            </table>
        </div>
    );
}
 }
      
export default Crudprops;