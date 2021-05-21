import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState(["Write some code"])

  return (
    <div className="App">
      <header className="App-header">
        TODO App
        <AddToDo />
        <ToDoList toDos={toDos} />
      </header>
    </div>
  );
}

export default App;
