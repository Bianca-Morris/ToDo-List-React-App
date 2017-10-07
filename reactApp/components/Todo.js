import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  handleRemove(){
    this.props.xClick();
  }

  render(){
    return(
      <li>
        <button onClick={() => this.handleRemove()}>X</button>
        {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
      </li>
    )
  }
}

export default Todo;
