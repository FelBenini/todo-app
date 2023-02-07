import React from 'react'
import { IconButton } from '@mui/material'
import { CookieState } from '../cookiesContext'
import { useState } from 'react';
import { TodoType } from '../types';
import { Cookies } from 'react-cookie';

const cookies = new Cookies()

function TodoItem(props: TodoType) {
    const { deleteTodos, finishedTodos, setFinishedTodos }: any = CookieState();
    const [deletion, setDeletion] = useState('deletion-menu hidden-deletion')
    function pushToFinshedTodos() {
        let newObject: TodoType = {id: props.id, type: props.type, name: props.name, situation: "completed", finishedAt: new Date()}
        setFinishedTodos([newObject, ...finishedTodos]);
        cookies.set('finishedTodos', [newObject, ...finishedTodos], { path: '/' });
    }
    return (
        <div key={props.id} className={`todo-item ${props.type}`}>
            <section>
                <span>
                    <h5>{props.type}</h5>
                    <p>{props.name}</p>
                </span>
                {props.situation === "incomplete" ?
                    <span className='todo-buttons'>
                        <IconButton key={props.id} size="large" onClick={() => { pushToFinshedTodos()
                        deleteTodos(props.id) }}>
                            <img src="/img/check-icon.svg" alt="mark task as completed" />
                        </IconButton>
                        <IconButton key={props.id} size="large" onClick={() => { setDeletion('deletion-menu') }}>
                            <img src="/img/trash-can.svg" alt="delete task" />
                        </IconButton> </span> : 
                        <span className='todo-done'><p>Todo completed!</p></span>
                }

            </section>
            {/*Deletion section*/}
            <div className={deletion}><h3>Are you sure you want to delete this todo?</h3> <span className="buttons-deletion">
                <IconButton sx={{ width: '62px', height: '62px' }} onClick={() => {
                    deleteTodos(props.id)
                    setDeletion('deletion-menu hidden-deletion')
                }}>YES</IconButton>
                <IconButton sx={{ width: '62px', height: '62px' }} onClick={() => setDeletion('deletion-menu hidden-deletion')}>NO</IconButton>
            </span>
            </div>
        </div>
    )
}

export default TodoItem