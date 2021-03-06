import React, { useContext } from 'react'
import { StateContext } from '../Contexts';

export default function Logout() {

    const { dispatch, state } = useContext(StateContext);

    return (
        <form onSubmit={evt => { evt.preventDefault(); dispatch({ type: "LOGOUT" }); }}>
            Logged in as: <b>{state.user}</b>
            <input type="submit" value="Logout" />
        </form>
    )
}
