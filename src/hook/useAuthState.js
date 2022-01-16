import { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from '../constants/app';
import { LOGIN_PATH, HOME_PATH } from '../constants/routes';

const authContext = createContext({});

// PROVIDER, CONSUMER

export const ProviderAuth = ({ children }) => {
  const auth = useAuthState();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

export const useAuthState = () => {
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      return { isLoggedIn: true };
    }
    return { isLoggedIn: false };
  });

  const logIn = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    setAuthStatus({ isLoggedIn: true });
    navigate(HOME_PATH);
  };

  const logOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    setAuthStatus({ isLoggedIn: false });
    navigate(LOGIN_PATH);
  };

  const register = () => {
    // TODO: register user
  };

  return {
    auth: authStatus,
    logOut,
    logIn,
    register,
  };
};
