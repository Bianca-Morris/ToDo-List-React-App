import React from 'react';
import ReactDOM from 'react-dom';

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

export default InputLine;
