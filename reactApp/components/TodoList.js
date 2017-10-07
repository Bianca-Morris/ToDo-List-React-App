import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

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

export default TodoList;
