import React from 'react'
import { IconButton } from '@mui/material'
import { CookieState } from '../cookiesContext'

function TodoItem(props) {
    const { deleteTodos } = CookieState();
    return (
        <div key={props.id} className={`todo-item ${props.type}`}>
            <span>
                <h5>{props.type}</h5>
                <p>{props.name}</p>
            </span>
            <span>
                <IconButton key={props.id} size="large" onClick={() => deleteTodos(props.id)}>
                    <img src="/img/trash-can.svg" alt="delete task" />
                </IconButton>
            </span>
        </div>
    )
}

export default TodoItem