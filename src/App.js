import CreateTodo from "./CreateTodo";
import React, { useState, useReducer, useEffect } from "react";
import { ThemeContext, StateContext } from "./Contexts";
import appReducer from "./Reducers";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage"
import TodoPage from "./pages/TodoPage"
import { mount, route } from "navi";
import { Router, View } from "react-navi"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'



function App() {
  /*
    const [todos, getTodos] = useResource(() => ({
      url: '/todos',
      method: 'get'
    }))
    */

  const [state, dispatch] = useReducer(appReducer, { user: '', todos: [] })
  /*
    useEffect(getTodos, [])
  
  
    useEffect(() => {
      if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data })
      }
    }, [todos])
    */


  //const [user, setUser] = useState('')
  //const [user, dispatchUser] = useReducer(userReducer, '')
  //const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos)



  const { user } = state;  //destructure user and todos out of state

  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'green',
  })

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todo/create': route({ view: <CreateTodo /> }),
    '/todo/:id': route(req => {
      return { view: <TodoPage id={req.params.id} /> }
    }),
  })




  //if user is empty, && and whatever after that wont
  //get executed
  return (
    <div>
      <ThemeContext.Provider value={theme} >
        <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Router routes={routes}>
            <Container>
              <HeaderBar setTheme={setTheme} />
              <hr />
              <View />
            </Container>
          </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
