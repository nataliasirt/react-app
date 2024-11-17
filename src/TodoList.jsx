import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <TodoListItem todo={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TodoList;
