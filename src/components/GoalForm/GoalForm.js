import propTypes from 'prop-types';
import { Button, Input } from '../ui';

export const GoalForm = ({ addNewGoal, editing, goalItem }) => {
  const isEditing = editing !== -1;

  const onSubmit = (event) => {
    event.preventDefault();
    // ემთხვევა input-ების name მნიშვნელობას
    const { title, completed, description } = event.target;

    const newGoal = {
      title: title.value,
      description: description.value,
      completed: completed.checked,
      id: Math.round(Math.random() * 1000000),
    };
    if (isEditing) {
      delete newGoal.id;
    }

    addNewGoal(newGoal);

    title.value = '';
    completed.checked = false;
    description.value = '';
  };

  return (
    <form className="mb-3" onSubmit={onSubmit}>
      <div className="mb-3">
        <Input
          label="ჩემი მიზანი"
          name="title"
          placeholder="ჩემი მიზანი"
          value={isEditing ? goalItem.title : ''}
          required
          type="text"
          className="form-control"
          id="goalTitle"
        />
      </div>
      <div className="mb-3">
        <Input
          label="მიზნის აღწერილობა"
          input="textarea"
          className="form-control"
          id="description"
          rows="3"
          name="description"
          value={isEditing ? goalItem.description : ''}
        />
      </div>

      <div className="mb-3 form-check">
        <Input
          label="მიზანი შესრულდა"
          type="checkbox"
          id="completed"
          className="form-check-input"
          name="completed"
          checked={isEditing ? goalItem.completed : false}
          value={isEditing ? goalItem.completed : ''}
        />
      </div>

      <div className="mb-3">
        <Button
          className={`btn ${isEditing ? 'btn-outline-primary' : 'btn-primary'}`}
          type="submit"
          text={isEditing ? 'რედაქტირება' : 'მიზნის შექმნა'}
        />
      </div>
    </form>
  );
};

GoalForm.propTypes = {
  editing: propTypes.number.isRequired,
  addNewGoal: propTypes.func.isRequired,
};
