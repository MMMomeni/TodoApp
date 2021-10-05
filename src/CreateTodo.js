import React, { useState } from 'react'

export default function CreateTodo({ user, todos, setTodos }) {

    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let todoStatus = "false";

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [currentDate, setDate] = useState(`${month < 10 ? `0${month}` : `${month}`}/${day}/${year}`)

    function handleTitle(evt) { setTitle(evt.target.value) }
    function handleContent(evt) { setContent(evt.target.value) }
    function handleCreate() {
        const newTodo = { title, content, currentDate, todoStatus }
        setTodos([newTodo, ...todos])
    }


    return (
        <form onSubmit={evt => { evt.preventDefault(); handleCreate(); }}>

            <div>
                <label htmlFor="create-title">Todo Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>
            <textarea value={content} onChange={handleContent} />
            <input type="submit" value="Create" />
        </form>)
}
