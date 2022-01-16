import { useState } from 'react';

export const GoalItem = ({ title = '', completed = false }) => {
  const [value, setValue] = useState(completed);

  return (
    <label className="list-group-item">
      <input
        className="form-check-input me-1"
        type="checkbox"
        value={value}
        checked={value}
        onChange={() => setValue((prev) => !prev)}
      />
      {title}
    </label>
  );
};
