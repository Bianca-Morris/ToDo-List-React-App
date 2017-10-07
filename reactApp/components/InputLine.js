import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      typedText: ""
    }
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTyping(event){
    this.setState({
      typedText: event.target.value
    })
  }

  handleSubmit(){
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ""
    })
  }

  render(){
    return (
      <div>
        <input value={this.state.typedText} onChange={(e) => this.handleTyping(e)} type="text" placeholder="Insert task here..."></input>
        <button onClick={() => this.handleSubmit()}>Add Task</button>
      </div>
    )
  }
}

export default InputLine;
