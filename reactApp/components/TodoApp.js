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
  }
  componentDidMount(){
    //this is where we will access the database <3
    this.setState({todos: this.state.todos.concat(dummyData)})
  }

  render(){
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
