import propTypes from 'prop-types';

import { GoalItem } from '../GoalItem';
import { FILTER_GOAL } from '../../constants/goals';

export const Goals = ({ filter = FILTER_GOAL.ALL, goals = [], removeGoal, onEdit }) => {
  const renderGoals = () => {
    let filtered = [...goals];

    if (filtered.length === 0) {
      return (
        <div className="d-flex w-100 justify-content-between">
          <h2 className="text-muted">შენი ხარ უმიზნოდ დარჩენილი :( ...</h2>
        </div>
      );
    }

    if (filter === FILTER_GOAL.ACTIVE) {
      filtered = goals.filter((goal) => {
        return !goal.completed;
      });
    } else if (filter === FILTER_GOAL.COMPLETED) {
      filtered = goals.filter((goal) => {
        return goal.completed;
      });
    }

    return filtered.map((goal, index) => {
      return (
        <div className="d-flex w-100 justify-content-between" key={goal.id}>
          <GoalItem title={goal.title} completed={goal.completed} />

          <div>
            <button className="btn btn-outline-warning me-2" onClick={() => onEdit(index)}>
              <i className="bi bi-pencil"></i>
            </button>
            <button className="btn btn-outline-danger" onClick={() => removeGoal(goal.id)}>
              <i className="bi bi-trash2"></i>
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row px-3">
      <div className="list-group">{renderGoals()}</div>
    </div>
  );
};

Goals.propTypes = {
  removeGoal: propTypes.func.isRequired,
  onEdit: propTypes.func.isRequired,
};
