import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  handleRemove(){
    this.props.xClick();
  }

  toggleComplete(){
    this.props.toggle();
  }

  render(){
    return(
      <li>
        <button onClick={() => this.handleRemove()}>X</button>
        <span onClick={() => this.toggleComplete()}>
          {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
        </span>
      </li>
    )
  }
}

export default Todo;
