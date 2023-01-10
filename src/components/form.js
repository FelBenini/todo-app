import React from 'react'
import { Cookies } from 'react-cookie';
import App from '../App';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const cookies = new Cookies()

function Form() {
    const [name, setName] = useState('');

    const [arrayOfObjects, setArrayOfObjects] = useState(cookies.get('arrayOfObjects') || []);
    const [alignment, setAlignment] = useState('personal')

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
        <form onSubmit={handleSubmit}>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="personal" aria-label="left aligned" sx={{ borderRadius: '50px', width: '300px' }}>
                    Personal
                </ToggleButton>
                <ToggleButton value="professional" aria-label="centered" sx={{ borderRadius: '50px', width: '300px' }}>
                    Professional
                </ToggleButton>
            </ToggleButtonGroup>

            <label>
                Name:

                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form