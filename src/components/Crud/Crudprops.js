import React, {Component} from 'react';
import TodoTable from './TodoTable'
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
          todo : [
              {
                  id:1,
                  active:false,
                  date:'2010-01-11',
                  item:'go to anywhere'
            }
          ]
      }
    }


render = () => {
    return (
        <TodoTable />
    );
}
}
      
export default Crudprops;