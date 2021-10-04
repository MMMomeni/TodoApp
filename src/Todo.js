import React from 'react'

export default function Todo({ title, description, dateCreated, complete }) {
    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br />
            <div>{dateCreated}</div>
            <div>{complete}</div>

        </div>
    )
}
