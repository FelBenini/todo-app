import './App.css';
import { Cookies } from 'react-cookie';
import { useState } from 'react';
import TodoItem from './components/todo-item';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const cookies = new Cookies()

function App() {
  const [type, setType] = useState('personal')
  const [arrayOfObjects, setArrayOfObjects] = useState(cookies.get('arrayOfObjects') || []);
  const [name, setName] = useState('');
  const [borderColor, setBorderColor] = useState()

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "") {
      const newObject = { id: Date.now(), name, situation: "incomplete", type: type };
      setArrayOfObjects([...arrayOfObjects, newObject]);
      cookies.set('arrayOfObjects', [...arrayOfObjects, newObject], { path: '/' });
      setName('')
    }
  }

  const handleTypeChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setType(event.target.value);
    }
    if (type === "professional") {
      setBorderColor('#09CAAD')
    } else if (type === "personal") {
      setBorderColor('#D58042')
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <ToggleButtonGroup value={type} exclusive onChange={handleTypeChange} aria-label="text alignment">
          <ToggleButton value="personal" aria-label="left aligned" sx={{ borderRadius: '4px', width: '125px', height: '40px', textTransform: 'none', fontFamily: "'Raleway', sans-serif" }} color="primary">
            Personal
          </ToggleButton>
          <ToggleButton value="professional" aria-label="centered" sx={{ borderRadius: '4px', width: '125px', height: '40px', textTransform: 'none', fontFamily: "'Raleway', sans-serif" }} color="secondary">
            Professional
          </ToggleButton>
        </ToggleButtonGroup>

        <textarea placeholder={`Type your ${type} task here...`} style={{ border: `2px solid ${borderColor}80` }} value={name} onChange={(e) => setName(e.target.value)} />
        <button style={{backgroundColor: borderColor}} type="submit" value="Submit">Post Todo<img src="/img/bx-plus.svg" alt="plus icon"/></button>
      </form>
      <section id="todo-display">
      {arrayOfObjects.map((object) => (
        <TodoItem id={object.id} type={object.type} name={object.name} />
      ))}
      </section>
    </main>
  )
}
export default App;
