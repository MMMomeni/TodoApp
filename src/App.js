import UserBar from "./user/UserBar";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import React, { useState, useReducer } from "react";


function App() {


  const initialTodos = [
    {
      title: "Todo1",
      content: "Laundry",
      currentDate: "9/28/2021",
      todoStatus: "false",

    },
    {
      title: "Todo2",
      content: "Finish homeWork2",
      currentDate: "9/28/2021",
      todoStatus: "false",

    },
    {
      title: "Todo3",
      content: "Change oil",
      currentDate: "9/28/2021",
      todoStatus: "false",

    },
    {
      title: "Todo4",
      content: "Shop groceries",
      currentDate: "9/28/2021",
      todoStatus: "false",

    },
  ]

  //const [todos, setTodos] = useState(initialTodos)


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


  function todoReducer(state, action) {
    switch (action.type) {
      case 'CREATE_TODO':
        const newTodo = {
          title: action.title,
          content: action.content,
          currentDate: action.currentDate,
          todoStatus: action.todoStatus,

        }
        return [newTodo, ...state]
      default:
        throw new Error()
    }
  }


  //const [user, setUser] = useState('')
  const [user, dispatchUser] = useReducer(userReducer, '')
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos)


  //if user is empty, && and whatever after that wont
  //get executed
  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser} />
      <br /><br /><hr /><br />
      {user && <CreateTodo user={user} todos={todos} dispatch={dispatchTodos} />}
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
