import React from 'react'
import TodoItem from './components/TodoItem'
import TodosData from './TodosData'
import './App.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todoItems: TodosData
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState( prevState => {
      const updatedTodos = prevState.todoItems.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todoItems: updatedTodos
      }
    })
  }

  render() {
    const todosComponents = this.state.todoItems.map( item => {
      return <TodoItem key={item.id} todo={item} handleChange={this.handleChange}/>
    })
  
    return (
      <div className="TodoList">
        {todosComponents}
      </div>
    )
  }

}

export default App;