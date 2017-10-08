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
          {this.props.todos.map((cv, i)=>(
            <Todo key={cv.taskText} task={cv.taskText}
            completed={cv.completed} toggle={()=>(this.props.toggleClick(i))}
            xClick={()=>(this.props.todoXClick(i))}/>)
          )}
        </ul>
      )
    }
}

export default TodoList;
