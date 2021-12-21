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
          newItem :'',
          initialTodo: {},
      }
      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

handleDelete = (id) => {
    const newTodo = this.state.todo.filter((todo) => todo.id !== id)
    this.setState({todo: newTodo})

 }
handleSubmit = (e) => {
    console.log(e)
    if(!this.state.newItem =='') {
    this.setState({
        todo: [
            ...this.state.todo,
            {
                id:this.state.todo.length + 1,
                active:false,
                item: this.state.newItem
            },
        ],
        newItem:''
    })
    }
}
handleInput = (item) => {
    this.setState({newItem:item})
    console.log('newItem', this.state.newItem)
}
handleEdit = () => {
    this.setState({editing:true})
}
handleCancle = () => {
    this.setState({editing:false})
}
handleInitialTodo = (todo) => {
    console.log(todo)
    this.setState({editing:true, initialTodo : {...todo} })
    console.log(this.state.initialTodo)
}
handleTypeEdit = (evalue) => {
    console.log(evalue)
    this.setState({initialTodo:{...this.state.initialTodo, item:evalue}})
}

render = () => {
    return (
    <div style={styles.table} className="todo">
        {!this.state.editing ? (
        <AddTodo 
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
            newItem={this.state.newItem}
        />
        ) :
        (
        <UpdateTodo 
            handleCancle={this.handleCancle}
            initialTodo={this.state.initialTodo}
            handleTypeEdit={this.handleTypeEdit}
        />
        )
        }
        <TodoTable 
            todo={this.state.todo}
            handleDelete={this.handleDelete}
            handleInitialTodo={this.handleInitialTodo}
        />
    </div>
    );
    }
}
      
export default Crudprops;

