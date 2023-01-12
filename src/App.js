import './App.css';
import TodoItem from './components/todo-item';
import Header from './components/header';
import { CookieState } from './cookiesContext';
import Form from './components/form';

function App() {
  const {arrayOfTodos} = CookieState()

  return (
    <main>
      <Header/>
      <img src="/img/logo.svg" alt="todo app logo" id="todo-app-logo"/>
      <Form/>
      <section id="todo-display">
      {arrayOfTodos.map((object) => (
        <TodoItem id={object.id} type={object.type} name={object.name} />
      ))}
      </section>
    </main>
  )
}
export default App;
