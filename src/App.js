import UserBar from "./user/UserBar";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import React, { useState } from "react";


function App() {

  const [user, setUser] = useState('')

  const todos = [
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
  //if user is empty, && and whatever after that wont
  //get executed
  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      <br /><br /><hr /><br />
      {user && <CreateTodo user={user} />}
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
