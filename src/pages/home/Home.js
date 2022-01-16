import { useState } from 'react';
// import { appConfig } from './constants/app';
import { Goals } from '../../components/Goals';
import { GoalForm } from '../../components/GoalForm';
import { GoalFilters } from '../../components/GoalFilters';
import { Card } from '../../components/Card';
// import Header from './components/header';

import { FILTER_GOAL, goals } from '../../constants/goals';
import { withAuthProtection } from '../../hoc/withAuthProtection';
import { useHover } from '../../hook/useHover';

function Home() {
  const [filter, setFilter] = useState(FILTER_GOAL.ALL);
  const [editing, setEditing] = useState(-1);
  const [goalList, setGoalList] = useState(goals);
  const [hoverRef, isHovering] = useHover();

  const onFilter = (newFilter) => {
    // console.log('newFilter', newFilter);
    setFilter(newFilter);
  };

  const addNewGoal = (newGoal) => {
    if (editing !== -1) {
      const newList = [
        ...goalList.slice(0, editing),
        {
          ...goalList[editing],
          ...newGoal,
        },
        ...goalList.slice(editing + 1),
      ];
      setGoalList(newList);
      setEditing(-1);
    } else {
      const newList = [...goalList, newGoal];
      setGoalList(newList);
    }
  };

  const removeGoal = (goalId) => {
    const newList = goalList.filter((goal) => goal.id !== goalId);
    setGoalList(newList);
  };

  const onEdit = (elIndex) => {
    setEditing(elIndex);
  };

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-12">
          <h1 className="text-muted" ref={hoverRef}>
            I Love👌: {isHovering ? 'Rocket Science 🚀' : 'Programming 🧑‍💻'}
          </h1>
        </div>
        <Card className="col-12 mb-2 p-3">
          <GoalForm addNewGoal={addNewGoal} editing={editing} goalItem={goalList[editing]} />
          <hr />
          <div className="d-flex justify-content-between col-6">
            <GoalFilters onFilter={onFilter} filter={filter} disabled={!goalList.length} />
          </div>
        </Card>
        <div className="col-8 shadow p-3">
          <h2>ჩემი მიზნები:</h2>
          <hr />
          <Goals filter={filter} goals={goalList} removeGoal={removeGoal} onEdit={onEdit} />
        </div>
      </div>
    </>
  );
}

export default withAuthProtection(Home);
