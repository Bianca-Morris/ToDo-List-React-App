import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

var dummyData = [{taskText:"Wash dog", completed: false}, {taskText:"Wash car", completed: true}, {taskText:"Pick up dinner", completed: false}, {taskText: "Buy milk", completed: false}];

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount(){
    //this is where we will access the database <3
    this.setState({
      todos: this.state.todos.concat(dummyData)
    })
  }

  addTodo(taskString){
    console.log(taskString);
    this.setState({
      todos: this.state.todos.concat({
        taskText: taskString,
        completed: false
      })
    })
  }

  render(){
    return (
      <div>
        <InputLine submit={(str) => (this.addTodo(str))}/>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
