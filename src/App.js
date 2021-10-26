import UserBar from "./user/UserBar";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import React, { useState, useReducer, useEffect } from "react";
import Header from "./Header";
import { ThemeContext, StateContext } from "./Contexts";
import ChangeTheme from "./ChangeTheme";
import appReducer from "./Reducers";
import { useResource } from "react-request-hook";


function App() {

  const [todos, getTodos] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [state, dispatch] = useReducer(appReducer, { user: '', todos: [] })

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
  }, [todos])


  //const [user, setUser] = useState('')
  //const [user, dispatchUser] = useReducer(userReducer, '')
  //const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos)



  const { user } = state;  //destructure user and todos out of state

  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'green',
  })



  //if user is empty, && and whatever after that wont
  //get executed
  return (
    <div>
      <ThemeContext.Provider value={theme} >
        <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Header text="Todo App" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <UserBar />
          <br /><br /><hr /><br />
          {user && <CreateTodo />}
          <TodoList />
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
