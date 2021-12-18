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
          editing : false,
          newItem :''
      }
    }

handleDelete = (id) => {
    const newTodo = this.state.todo.filter((todo) => todo.id !== id)
    this.setState({todo: newTodo})
 }
handleAdd = (item) => {
    console.log(item)
}
handleInput = (e) => {
    console.log(e)
}

render = () => {
    return (
    <div style={styles.table} className="todo">
        {!this.state.editing ? (
        <AddTodo 
            todo={this.state.todo}
            newItem={this.state.newItem}
            handleAdd={this.handleAdd}
            handleInput={this.handleInput}
        />
        ) :
        (
        <UpdateTodo />
        )
        }
        <TodoTable 
            todo={this.state.todo}
            handleDelete={this.handleDelete}
        />
    </div>
    );
    }
}
      
export default Crudprops;

