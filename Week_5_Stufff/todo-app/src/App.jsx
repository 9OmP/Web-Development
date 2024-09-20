import { useState } from "react";
import { CreateTodo  } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todo").then(async function(value){
      const json = await value.json();
      console.log(json);
      setTodos(json);
  })
  

  return <>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
  </>;
}

export default App;
