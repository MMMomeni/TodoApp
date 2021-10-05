import UserBar from "./user/UserBar";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import React, { useState, useReducer } from "react";


function App() {


  const initialTodos = [
    {
      title: "Todo1",
      description: "Laundry",
      dateCreated: "9/28/2021",
      complete: "false",

    },
    {
      title: "Todo2",
      description: "HomeWork2",
      dateCreated: "9/28/2021",
      complete: "false",

    },
    {
      title: "Todo3",
      description: "Change oil",
      dateCreated: "9/28/2021",
      complete: "false",

    },
    {
      title: "Todo4",
      description: "Shop Grocery",
      dateCreated: "9/28/2021",
      complete: "false",

    },
  ]

  const [todos, setTodos] = useState(initialTodos)

  function userReducer(state, action) {
    switch (action.type) {
      case 'LOGIN':
      case 'REGISTER':
        return action.username
      case 'LOGOUT':
        return ''
      default:
        throw new Error()
    }
  }

  //const [user, setUser] = useState('')
  const [user, dispatchUser] = useReducer(userReducer, '')


  //if user is empty, && and whatever after that wont
  //get executed
  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser} />
      <br /><br /><hr /><br />
      {user && <CreateTodo user={user} todos={todos} setTodos={setTodos} />}
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
