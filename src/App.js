import UserBar from "./user/UserBar";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";


function App() {
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
  return (
    <div>
      <UserBar />
      <br /><br /><hr /><br />
      <CreateTodo todo="Submitting HomeWork" />
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
