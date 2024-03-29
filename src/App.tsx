import './App.css';
import TodoItem from './components/todo-item';
import Header from './components/header';
import { TodoType } from './types';
import { CookieState } from './cookiesContext';
import Form from './components/form';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useEffect } from 'react';

function App() {
  const { arrayOfTodos, finishedTodos }: any = CookieState()
  const [display, setDisplay] = useState('all')
  const [todoDisplay, setTodoDisplay] = useState(arrayOfTodos)

  const handleDisplayChange = (event: React.FormEvent<HTMLFormElement>, newAlignment: any) => {
    if (newAlignment !== null) {
      setDisplay((event.target as HTMLInputElement).value);
    }
  }

  useEffect(() => {
    if (display === "all") {
      setTodoDisplay(arrayOfTodos)
    } else if (display === "personal") {
      setTodoDisplay(arrayOfTodos.filter((element: TodoType) => element.type === "personal"))
    } else if (display === "professional") {
      setTodoDisplay(arrayOfTodos.filter((element: TodoType) => element.type === "professional"))
    } else if (display === "finished") {
      setTodoDisplay(finishedTodos)
    }
  }, [display, arrayOfTodos, finishedTodos])

  function MappedTasks() {
    if(todoDisplay.length === 0) {
      return (
        <div id="no-tasks">
        <h2>There is no Tasks to display here for now</h2>
        <h4>Start writing some tasks now!</h4>
        </div>
      )
    } else {
      return (
      todoDisplay.map((object: TodoType) => (
          <TodoItem id={object.id} type={object.type} name={object.name} situation={object.situation} finishedAt={object.finishedAt}/>
        )))
    }
  }
  
  return (
    <main>
      <Header />
      <img src="/img/logo.svg" alt="todo app logo" id="todo-app-logo" />
      <Form />
      <section id="todo-display">
        <ToggleButtonGroup value={display} onChange={(e: any, newAlignment: any) => {handleDisplayChange(e, newAlignment)}}>
          <ToggleButton value={'all'}>ALL</ToggleButton>
          <ToggleButton color="primary" value={'personal'}>PERSONAL</ToggleButton >
          <ToggleButton color="secondary" value={'professional'}>PROFESSIONAL</ToggleButton>
          <ToggleButton value={'finished'}>DONE</ToggleButton>
        </ToggleButtonGroup>
        
        <MappedTasks/>
      </section>
    </main>
  )
}
export default App;
