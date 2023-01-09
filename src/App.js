import './App.css';
import { Cookies } from 'react-cookie';
import { useState } from 'react';
import TodoItem from './components/todo-item';

const cookies = new Cookies()

function App() {
  const [arrayOfObjects, setArrayOfObjects] = useState(cookies.get('arrayOfObjects') || []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newObject = { id: Date.now(), name, situation: "incomplete", type: "professional" };
    setArrayOfObjects([...arrayOfObjects, newObject]);
    cookies.set('arrayOfObjects', [...arrayOfObjects, newObject], { path: '/' });
    setName('')
  }
  return (
    <div>
      {arrayOfObjects.map((object) => (
        <TodoItem type={object.type} name={object.name}/>
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default App;
