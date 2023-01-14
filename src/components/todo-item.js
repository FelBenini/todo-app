import React from 'react'
import { IconButton } from '@mui/material'
import { CookieState } from '../cookiesContext'
import { useState } from 'react';

function TodoItem(props) {
    const { deleteTodos } = CookieState();
    const [deletion, setDeletion] = useState('deletion-menu hidden-deletion')
    return (
        <div key={props.id} className={`todo-item ${props.type}`}>
            <section>
                <span>
                    <h5>{props.type}</h5>
                    <p>{props.name}</p>
                </span>
                <span>
                    <IconButton key={props.id} size="large" onClick={() => setDeletion('deletion-menu')}>
                        <img src="/img/trash-can.svg" alt="delete task" />
                    </IconButton>
                </span>
            </section>
            <div className={deletion}><h3>Are you sure you want to delete this todo?</h3> <span className="buttons-deletion">
                <IconButton sx={{ width: '60px', height: '60px' }} onClick={() => deleteTodos(props.id)}>YES</IconButton>
                <IconButton sx={{ width: '60px', height: '60px' }} onClick={() => setDeletion('deletion-menu hidden-deletion')}>NO</IconButton>
            </span>
            </div>
        </div>
    )
}

export default TodoItem