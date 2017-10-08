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
    this.setState({
      todos: this.state.todos.concat(dummyData)
    })
  }

  addTodo(taskString){
    //loop through and ensure that the taskString is unique
    var alreadyExists = false;
    this.state.todos.forEach((e)=>{
      if (e.taskText === taskString){
        alreadyExists = true;
        console.log("Couldn't add item! Already exists in todo list!");
      }
    });
    if (!alreadyExists){
    this.setState({
      todos: this.state.todos.concat({
        taskText: taskString,
        completed: false
      })
    });
    }
  }

  removeTodo(index){
    this.setState({
      todos: this.state.todos.slice(0,index).concat(this.state.todos.slice(index+1))
    })
  }

  toggleTodo(index){
    //replace a key of an object with
    var newArr = this.state.todos.map((c, i) => {
      if (i === index){
        //toggle the item with the appropriate index
        c.completed = !c.completed
        return c;
      } else {
        return c;
      }
    });
    console.log(newArr);
    //replace the existing array with the new one without mutating
    this.setState({
      todos: this.state.todos.slice(0,0).concat(newArr)
    });

  }

  render(){
    return (
      <div>
        <InputLine submit={(str) => (this.addTodo(str))}/>
        <TodoList todos={this.state.todos} toggleClick={(i) => (this.toggleTodo(i))} todoXClick={(i) => (this.removeTodo(i))} />
      </div>
    )
  }
}

export default TodoApp;
