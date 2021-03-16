import React from 'react'

function TodoItem(props) {

  const completedStyles = {
    textDecoration: "line-through",
    fontStyle: "italic",
    color: "#bbb"

  }

  return (
      <div className="TodoItem">
          <input 
              type="checkbox" 
              checked={props.todo.completed} 
              onChange={ () => props.handleChange(props.todo.id) }
          />
          <p style={props.todo.completed ? completedStyles : null}>{props.todo.text}</p>
      </div>
  )
}

export default TodoItem
