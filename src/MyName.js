import React, { useState } from 'react'

export default function MyName() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function handleFirstNameChange(evt) {
        setFirstName(evt.target.value)
    }

    function handleLastNameChange(evt) {
        setLastName(evt.target.value)
    }

    return (
        <div>

            <h1>Hello {firstName} {lastName}</h1>
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
            <input type="text" value={lastName} onChange={handleLastNameChange} />

        </div>)
}