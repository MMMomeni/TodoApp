import React from 'react'

export default function Todo({ title, content, currentDate, todoStatus }) {
    return (
        <div>
            <h3>{title}</h3>
            <div>{content}</div>
            <br />
            <div>{currentDate}</div>
            <div>Finished: {todoStatus}</div>

        </div>
    )
}
