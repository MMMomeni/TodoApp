import React, { useContext } from 'react'
import { ThemeContext } from "./Contexts";
import { StateContext } from './Contexts';

export default function Todo({ title, content, currentDate, todoStatus, completedDate, todoId }) {
    const { secondaryColor } = useContext(ThemeContext);

    const { dispatch } = useContext(StateContext);

    return (
        <div>
            <h3 style={{ color: secondaryColor }}>{title}</h3>
            <div>{content}</div>
            <br />
            <div>Created on: {currentDate}</div>
            <input type="checkbox" id="accept" onClick={e => { dispatch({ type: 'TOGGLE_TODO', todoStatus: (document.getElementById('accept').checked) ? true : false, todoId }) }} />
            <button onClick={(e) => { dispatch({ type: 'DELETE_TODO', todoId: todoId }); document.getElementById('accept').checked = false; }}>Delete Todo</button>
            {todoStatus && <><br /><i>Completed on: {new Date(completedDate).toLocaleDateString('en-us')}</i><br /></>}
            <hr />
        </div>
    )
}
