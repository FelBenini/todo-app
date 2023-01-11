import React from 'react'

function TodoItem(props) {
    if (props.type === "professional") {
        return (
            <div className='todo-item professional'>
                <h3>{props.type}</h3>
                <p>{props.name}</p>
            </div>
        )
    } else if (props.type === "personal") {
        return (
            <div className='todo-item personal'>
                <h3>{props.type}</h3>
                <p>{props.name}</p>
            </div>
        )
    }
}

export default TodoItem