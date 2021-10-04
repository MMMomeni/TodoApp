import React from 'react'

export default function CreateTodo({ }) {
    return (
        <form onSubmit={evt => evt.preventDefault()}>

            <div>
                <label htmlFor="create-title">Todo Title:</label>
                <input type="text" name="create-title" id="create-title" />
            </div>
            <textarea />
            <input type="submit" value="Create" />
        </form>)
}
