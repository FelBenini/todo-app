import './App.css';
import { Cookies } from 'react-cookie';
import { useState } from 'react';
import TodoItem from './components/todo-item';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const cookies = new Cookies()

function App() {
  const [alignment, setAlignment] = useState('personal')
  const [arrayOfObjects, setArrayOfObjects] = useState(cookies.get('arrayOfObjects') || []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newObject = { id: Date.now(), name, situation: "incomplete", type: alignment };
    setArrayOfObjects([...arrayOfObjects, newObject]);
    cookies.set('arrayOfObjects', [...arrayOfObjects, newObject], { path: '/' });
    setName('')
  }

    const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(event.target.value);
    }
  };

  return (
    <div>
      {arrayOfObjects.map((object) => (
        <TodoItem id={object.id} type={object.type} name={object.name}/>
      ))}
      <form onSubmit={handleSubmit}>
        <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="personal" aria-label="left aligned" sx={{ borderRadius: '50px', width: '300px'}}>
          Personal
        </ToggleButton>
        <ToggleButton value="professional" aria-label="centered" sx={{ borderRadius: '50px', width: '300px'}}>
          Professional
        </ToggleButton>
      </ToggleButtonGroup>

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
