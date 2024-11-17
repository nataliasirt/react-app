import PropTypes from 'prop-types';

function TodoListItem({ todo }) {
  return <span>{todo.title}</span>;
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoListItem;
