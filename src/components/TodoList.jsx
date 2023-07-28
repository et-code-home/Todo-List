import Todo from './Todo';

const TodoList = ({ id, todos, onDelete }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} onDelete={onDelete} />
        ))}
      </ul>
    );
  };

  export default TodoList;