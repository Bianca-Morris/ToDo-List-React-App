
import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ["Wash dog", "Wash car", "Pick up dinner", "Buy milk"];

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
      <li><button>X</button> {this.props.task}</li>
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
          {dummyData.map((cv)=>(<Todo task={cv}/>))}
        </ul>
      )
    }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}



ReactDOM.render(<TodoApp />, document.getElementById('root'));
