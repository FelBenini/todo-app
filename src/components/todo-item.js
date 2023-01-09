import React from 'react'

function TodoItem(props) {
    if (props.type === "professional") {
        return (
            <div className='todo-item professional'>
                {props.name}
            </div>
        )
    } else if (props.type === "personal") {
        return (
            <div className='todo-item personal'>
                {props.name}
            </div>
        )
    }
}

export default TodoItem