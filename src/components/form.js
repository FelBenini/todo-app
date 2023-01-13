import React from 'react'
import { CookieState } from '../cookiesContext';
import { useState } from 'react';
import { Cookies } from 'react-cookie';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const cookies = new Cookies()

function Form() {
    const { arrayOfTodos, setArrayOfTodos } = CookieState()
    const [name, setName] = useState('');
    const [borderColor, setBorderColor] = useState()
    const [type, setType] = useState('personal')

    function handleSubmit(e) {
        e.preventDefault();
        if (name !== "") {
            const newObject = { id: Date.now(), name: name, situation: "incomplete", type: type };
            setArrayOfTodos([newObject, ...arrayOfTodos]);
            cookies.set('arrayOfTodos', [newObject, ...arrayOfTodos], { path: '/' });
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
        <form id="form-todo" onSubmit={handleSubmit}>
            <ToggleButtonGroup value={type} exclusive onChange={handleTypeChange} aria-label="text alignment">
                <ToggleButton value="personal" aria-label="left aligned" sx={{ borderRadius: '4px', width: '125px', height: '40px', textTransform: 'none', fontFamily: "'Raleway', sans-serif" }} color="primary">
                    Personal
                </ToggleButton>
                <ToggleButton value="professional" aria-label="centered" sx={{ borderRadius: '4px', width: '125px', height: '40px', textTransform: 'none', fontFamily: "'Raleway', sans-serif" }} color="secondary">
                    Professional
                </ToggleButton>
            </ToggleButtonGroup>

            <textarea placeholder={`Type your ${type} task here...`} style={{ border: `2px solid ${borderColor}80` }} value={name} onChange={(e) => setName(e.target.value)} />
            <button style={{ backgroundColor: borderColor }} type="submit" value="Submit">Post Todo<img src="/img/bx-plus.svg" alt="plus icon" /></button>
        </form>
    )
}

export default Form