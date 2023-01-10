import React from 'react'

function TodoItem(props) {
    if (props.type === "professional") {
        return (
            <div className='todo-item professional'>
                {props.name} {props.type}
            </div>
        )
    } else if (props.type === "personal") {
        return (
            <div className='todo-item personal'>
                {props.name} {props.type}
            </div>
        )
    }
}

export default TodoItem