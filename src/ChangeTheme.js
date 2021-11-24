import React, { useEffect, useState } from 'react'
import { useResource } from 'react-request-hook'
import { NavDropdown } from 'react-bootstrap'


/*
const THEMES = [
    { primaryColor: 'deepskyblue', secondaryColor: 'coral' },
    { primaryColor: 'orchid', secondaryColor: 'mediumseagreen' }
]
*/




function ThemeItem({ theme, active, onClick }) {
    return (
        <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
            <span style={{ color: theme.primaryColor }}>Primary</span> /
            <span style={{ color: theme.secondaryColor }}>Secondary</span>
        </span>
    )
}


export default function ChangeTheme({ theme, setTheme }) {

    //const [themes, setThemes] = useState([])
    /*
        useEffect(() => {
            fetch('/api/themes')
                .then(result => result.json())
                .then(themes => setThemes(themes))
        }, [])
        */

    const [themes, getThemes] = useResource(() => ({
        url: '/themes',
        method: 'get'
    }))

    useEffect(getThemes, [])

    const { data, isLoading } = themes



    function isActive(t) { return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor }
    return (<>
        {isLoading && ' Loading themes...'}
        <NavDropdown title="ChangeTheme" id="basic-nav-dropdown">


            {data && data.map((t, i) =>
                <NavDropdown.Item>

                    <ThemeItem key={'theme-' + i} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
                </NavDropdown.Item>
            )}
        </NavDropdown >
    </>

    )
}
