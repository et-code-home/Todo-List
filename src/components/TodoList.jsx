import Todo from './Todo';

const TodoList = ({ todos, onDelete }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.title} onDelete={onDelete} />
        ))}
      </ul>
    );
  };

  export default TodoList;