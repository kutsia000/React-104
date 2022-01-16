import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '../ui';

import { loginAsync } from '../../api/auth';
import { useAuth } from '../../hook/useAuthState';
import { NavLink } from 'react-router-dom';

import { REGISTER_PATH } from '../../constants/routes';

const LoginForm = ({ customSubmit }) => {
  const { register, handleSubmit } = useForm();
  const { logIn } = useAuth();

  const onSubmit = async ({ email, password }) => {
    const response = await loginAsync(email, password);
    if (response.success) {
      logIn(response.data.token);
    } else {
      // TODO: show error
    }
    customSubmit(response);
  };

  console.log('LOGIN FORM RENDERING...');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <code>
        <pre>"email": "eve.holt@reqres.in", "password": "cityslicka"</pre>
      </code>
      <div className="form-group mb-3">
        <Input
          label="ელ. ფოსტა"
          name="email"
          placeholder="example@mail.com"
          type="email"
          className="form-control"
          id="email"
          {...register('email', { required: true })}
        />
      </div>

      <div className="form-group mb-3">
        <Input
          label="პაროლი"
          name="password"
          placeholder="*******"
          type="password"
          className="form-control"
          id="password"
          {...register('password', { required: true })}
        />
      </div>

      <div className="form-group mb-3">
        <Button className="btn btn-outline-primary" type="submit" text="შესვლა" />
        <NavLink to={REGISTER_PATH} className="btn btn-">Register</NavLink>
      </div>
    </form>
  );
};

export default memo(LoginForm);
