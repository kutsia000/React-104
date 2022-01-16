import { useState, useMemo, useCallback } from 'react';
import { Card } from '../../components/Card/Card';
import LoginForm from '../../components/LoginForm/LoginForm';

const refType = {
  name: 'Super admin',
};

// const numbers = [1, 2, 3, 4, 5];

const Login = (props) => {
  const [value, setValue] = useState(0);

  // const numbers = useMemo(() => [1, 2, 3, 4, 5], []);

  console.log('LOGIN RENDERING...');

  const onSubmit = useCallback((data) => {
    console.log('onSubmit', data);
  }, []);

  return (
    <div className="row login-page">
      <h1 className="text-muted">Login</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setValue((value) => value + 1);
        }}
      >
        Change State - {value}
      </button>
      <hr />
      {/*list={numbers} */}
      <Card className="p-4">
        <LoginForm valueType={3} customSubmit={onSubmit} />
      </Card>
    </div>
  );
};

export default Login;
