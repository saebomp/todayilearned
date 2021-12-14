import React, {Component} from 'react';
import TodoTable from './TodoTable'
import AddTodo from './AddTodo'
import UpdateTodo from './UpdateTodo'
const styles = {

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
          ],
          editing : false
      }
    }


render = () => {
    return (
    <div style={styles.table} className="todo">
        {!this.state.editing ? (
        <AddTodo />
        ) :
        (
        <UpdateTodo />
        )
        }
        <TodoTable 
            todo={this.state.todo}
        />
    </div>
    );
    }
}
      
export default Crudprops;