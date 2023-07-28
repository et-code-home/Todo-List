const Todo = ({ id, text, onDelete }) => {
    return (
      <li>
        <span>{text}</span>
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  };

  export default Todo;