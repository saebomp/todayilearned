import React, {Component} from 'react';
import TodoTable from './TodoTable'
import AddTodo from './AddTodo'
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
                active:true,
                item:'go anywhere'
            },
            {
                id:2,
                active:false,
                item:'assignment'
            },
            {
                id:3,
                active:true,
                item:'listen to radiooo'
            },
          ]
      }
    }


render = () => {
    return (
    <div style={styles.table}>
        <AddTodo />
        <TodoTable 
        todo={this.state.todo}
        />
    </div>
    );
}
}
      
export default Crudprops;