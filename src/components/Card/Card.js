import { useState } from 'react';
export const Card = ({ children, className, ...props }) => {
  const [value, setValue] = useState(false);

  return (
    <div className={`card shadow ${className}`} {...props}>
      {value && children}

      <div className="mt-2 mb-2">
        <button
          className={`btn ${value ? 'btn-danger' : 'btn-warning'}`}
          onClick={() => setValue((s) => !s)}
        >
          Click to {value ? 'hide' : 'show'}
        </button>
      </div>
    </div>
  );
};
