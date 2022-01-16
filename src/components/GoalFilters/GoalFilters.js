import propTypes from 'prop-types';

import { Button } from '../ui';
import { FILTER_GOAL } from '../../constants/goals';

const activeClassName = 'btn btn-success';
const defaultClassName = 'btn btn-outline-success';

const getClassName = (check) => (check ? activeClassName : defaultClassName);

export const GoalFilters = ({ onFilter, filter, disabled }) => {
  return (
    <>
      <Button
        text="ჩემი ყველაზე მიზანი"
        className={getClassName(filter === FILTER_GOAL.ALL)}
        onClick={() => {
          onFilter(FILTER_GOAL.ALL);
        }}
        disabled={disabled}
      />

      <Button
        text="აქტიური მიზნები"
        className={getClassName(filter === FILTER_GOAL.ACTIVE)}
        onClick={() => {
          onFilter(FILTER_GOAL.ACTIVE);
        }}
        disabled={disabled}
      />

      <Button
        text="შესრულებული მიზნები"
        className={getClassName(filter === FILTER_GOAL.COMPLETED)}
        onClick={() => {
          onFilter(FILTER_GOAL.COMPLETED);
        }}
        disabled={disabled}
      />
    </>
  );
};

GoalFilters.defaultProps = {
  disabled: false,
  filter: FILTER_GOAL.ALL,
};

GoalFilters.propTypes = {
  disabled: propTypes.bool.isRequired,
  onFilter: propTypes.func.isRequired,
  filter: propTypes.oneOf(Object.values(FILTER_GOAL)),
};
