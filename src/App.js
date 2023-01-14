import './App.css';
import TodoItem from './components/todo-item';
import Header from './components/header';
import { CookieState } from './cookiesContext';
import Form from './components/form';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useEffect } from 'react';

function App() {
  const { arrayOfTodos } = CookieState()
  const [display, setDisplay] = useState('all')
  const [todoDisplay, setTodoDisplay] = useState(arrayOfTodos)

  const handleDisplayChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setDisplay(event.target.value);
    }
  }

  useEffect(() => {
    if (display === "all") {
      setTodoDisplay(arrayOfTodos)
    } else if (display === "personal") {
      setTodoDisplay(arrayOfTodos.filter(element => element.type === "personal"))
    } else if (display === "professional") {
      setTodoDisplay(arrayOfTodos.filter(element => element.type === "professional"))
    }
  }, [display, arrayOfTodos, setTodoDisplay])

  function MappedTasks() {
    if(todoDisplay.length === 0) {
      return (
        <div id="no-tasks">
        <h2>There is no Tasks to display here</h2>
        <h4>Start writing some tasks now!</h4>
        </div>
      )
    } else {
      return (
      todoDisplay.map((object) => (
          <TodoItem id={object.id} type={object.type} name={object.name} />
        )))
    }
  }
  
  return (
    <main>
      <Header />
      <img src="/img/logo.svg" alt="todo app logo" id="todo-app-logo" />
      <Form />
      <section id="todo-display">
        <ToggleButtonGroup value={display} onChange={handleDisplayChange}>
          <ToggleButton value={'all'}>ALL</ToggleButton>
          <ToggleButton value={'personal'}>PERSONAL</ToggleButton>
          <ToggleButton value={'professional'}>PROFESSIONAL</ToggleButton>
        </ToggleButtonGroup>
        
        <MappedTasks/>
      </section>
    </main>
  )
}
export default App;
