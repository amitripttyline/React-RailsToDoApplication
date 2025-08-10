import './App.css';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import { get_todos, create_todo, delete_todo } from "./api/endpoints";
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await get_todos();
      setTodos(Array.isArray(fetchedTodos) ? fetchedTodos : []);
    };
    fetchTodos();
  }, []);

  const addTodo = async (todo_name) => {
    const todo = await create_todo(todo_name);
    setTodos([todo, ...todos]);
  };

  const deleteTodoHandler = async (id) => {
    await delete_todo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className='app-container'>
        <h1 className='title'>To-Do List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      </div>
    </div>
  );
}

export default App;
