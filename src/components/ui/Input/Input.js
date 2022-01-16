import { useState, useEffect, forwardRef } from 'react';
import propTypes from 'prop-types';

export const Input = forwardRef(
  (
    {
      type,
      className,
      id,
      name,
      value,
      required,
      readOnly,
      disabled,
      label,
      placeholder,
      input,
      checked,
      ...rest
    },
    ref
  ) => {
    const [val, setValue] = useState(value);
    const [check, setChecked] = useState(checked);

    useEffect(() => {
      setValue(value);
    }, [value]);

    useEffect(() => {
      setChecked(checked);
    }, [checked]);

    console.log('INPUT RENDERING...');

    const renderInput = () => {
      if (input === 'textarea') {
        return (
          <textarea
            type={type}
            className={className}
            id={id}
            placeholder={placeholder}
            name={name}
            value={val}
            required={required}
            readOnly={readOnly}
            disabled={disabled}
            onChange={({ target }) => setValue(target.value)}
            ref={ref}
            {...rest}
          ></textarea>
        );
      } else {
        return (
          <input
            type={type}
            className={className}
            id={id}
            placeholder={placeholder}
            name={name}
            value={val}
            required={required}
            readOnly={readOnly}
            disabled={disabled}
            checked={check}
            ref={ref}
            onChange={({ target }) => {
              if (type === 'checkbox') {
                setChecked(target.checked);
              } else {
                setValue(target.value);
              }
            }}
            {...rest}
          />
        );
      }
    };

    return (
      <>
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        {renderInput()}
      </>
    );
  }
);

Input.defaultProps = {
  type: 'text',
  className: 'form-control',
  input: 'input',
  checked: false,
};

Input.prototype = {
  type: propTypes.oneOf(['text', 'email', 'number', 'password', 'radio', 'checkbox']),
  input: propTypes.oneOf(['input', 'textarea']),
  className: propTypes.string,
  id: propTypes.string,
  placeholder: propTypes.string,
  name: propTypes.string.isRequired,
  value: propTypes.string,
  required: propTypes.bool,
  readOnly: propTypes.bool,
  disabled: propTypes.bool,
  label: propTypes.string,
  checked: propTypes.bool,
};
