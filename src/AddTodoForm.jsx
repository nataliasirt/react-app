import PropTypes from 'prop-types';

const AddTodoForm = ({ onAddTodo }) => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value.trim();
    if (todoTitle) {
      onAddTodo(todoTitle);
      event.target.reset();
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
