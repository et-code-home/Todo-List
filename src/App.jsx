import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [nextID, setNextID] = useState(6);

  useEffect(() => {
    // Fetch initial data from the JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        // Add the first few todos to our todo object structure (the full list is pretty long, we don't need all of them)
        const starterTodos = [];
        for(let i=0; i<5; i++) {
          const item = data[i];
          starterTodos.push({
            id: item.id,
            text: item.title,
          });
        }
        setTodos(starterTodos);
      })
      .catch((error) => console.error('Error fetching initial data:', error));
  }, []);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: nextID,
      text: text,
    };

    setNextID(nextID + 1);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
