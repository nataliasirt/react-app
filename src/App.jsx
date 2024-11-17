
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Make breakfast' },
    { id: '2', title: 'Get grocieries' },
    { id: '3', title: 'Make dinner' },
  ]);

  const handleAddTodo = (title) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now().toString(), title },
    ]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
