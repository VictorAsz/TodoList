import "./App.css";
import { useState, useEffect } from "react";
import { Bstrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "local://localhost:5000";

function App(){
  const [title, settitle] = useState("")
  const [time, settime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("enviou")
  }


  return(
      <div className="app">
        <div className="todo-header">
          <h1>React Todo</h1>
        </div>
        <div className="form-todo">
          <h2>insira sua tarefa</h2>
          <form onSubmit={handleSubmit}>
              <input type="submit" value="enviar" />
          </form>
        </div>
        <div className="list-todo">
          <h2>lista de tarefas</h2>
          {todos.length === 0 && <p> não há tarefas!</p>}
        </div>
      </div>


  );


}


export default App;
