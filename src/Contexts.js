import React from 'react'

export const ThemeContext = React.createContext({
    primaryColor: 'blue',
    secondaryColor: 'yellow',
})

export const StateContext = React.createContext({
    state: {},
    dispatch: () => { }
})

