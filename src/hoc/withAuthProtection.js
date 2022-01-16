import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuthState';

export const withAuthProtection = (Component) => {
  const WithAuthProtection = (props) => {
    const { auth } = useAuth();

    return auth.isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />;
  };

  return WithAuthProtection;
};
