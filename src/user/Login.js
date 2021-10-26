import React, { useState, userReducer, useContext } from 'react'
import { StateContext } from '../Contexts'

export default function Login() {

    const { dispatch } = useContext(StateContext);
    const [username, setUsername] = useState('')
    //to handle username change
    function handleUsername(evt) { setUsername(evt.target.value) }

    return (
        <form onSubmit={evt => { evt.preventDefault(); dispatch({ type: "LOGIN", username }); }}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" value={username} onChange={handleUsername} id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" />
            <input type="submit" value="Login" />
        </form >
    )
}
