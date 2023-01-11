import React from 'react'

function TodoItem(props) {
    if (props.type === "professional") {
        return (
            <div className='todo-item professional'>
                <h5>{props.type}</h5>
                <p>{props.name}</p>
            </div>
        )
    } else if (props.type === "personal") {
        return (
            <div className='todo-item personal'>
                <h5>{props.type}</h5>
                <p>{props.name}</p>
            </div>
        )
    }
}

export default TodoItem