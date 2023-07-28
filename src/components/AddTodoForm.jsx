import { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
    const [todoText, setTodoText] = useState('');
  
    const handleInputChange = (e) => {
      setTodoText(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (todoText.trim() !== '') {
        onAdd(todoText);
        setTodoText('');
      }
    };

    return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={todoText} onChange={handleInputChange} />
          <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodoForm;