import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos = [] }) {
    return (

        <div>
            {todos.map((t, i) => <Todo {...t} title={t.title} content={t.content} currentDate={t.currentDate} todoStatus={t.todoStatus} key={'todo-' + i} />)}
        </div>

    )
}
