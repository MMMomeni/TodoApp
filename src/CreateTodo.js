import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from './Contexts';
import { useResource } from 'react-request-hook';

import { useNavigation } from 'react-navi';

export default function CreateTodo() {




    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    //let todoStatus = false;

    const { dispatch } = useContext(StateContext);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [currentDate, setDate] = useState(`${month < 10 ? `0${month}` : `${month}`}/${day}/${year}`)

    function handleTitle(evt) { setTitle(evt.target.value) }
    function handleContent(evt) { setContent(evt.target.value) }

    //function handleCreate() {
    //    const newTodo = { title, content, currentDate, todoStatus }
    //    dispatch([newTodo, ...todos])
    //}

    const [todo, createTodo] = useResource(({ title, content, currentDate }) => ({
        url: '/todos',
        method: 'post',
        data: { title, content, currentDate }
    }))

    const navigation = useNavigation()


    function handleCreate() {
        createTodo({ title, content, currentDate })

    }
    //makes sure the todo.data comes back from the server before dispatching
    useEffect(() => {
        if (todo && todo.data) {
            dispatch({ type: 'CREATE_TODO', title: todo.data.title, content: todo.data.content, currentDate: todo.data.currentDate, id: todo.data.id })
            navigation.navigate(`/todo/${todo.data.id}`)
        }
    }, [todo])




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
