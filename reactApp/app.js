
import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [{taskText:"Wash dog", completed: false}, {taskText:"Wash car", completed: true}, {taskText:"Pick up dinner", completed: false}, {taskText: "Buy milk", completed: false}];

class InputLine extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <input type="text" placeholder="Insert task here..."></input>
        <button>Add Task</button>
      </div>
    )
  }
}

class Todo extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li>
        <button>X</button>
        {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
      </li>
    )
  }
}


class TodoList extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <ul>
          {this.props.todos.map((cv)=>(<Todo task={cv.taskText} completed={cv.completed}/>))}
        </ul>
      )
    }
}

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



ReactDOM.render(<TodoApp />, document.getElementById('root'));
