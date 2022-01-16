import { NavLink } from 'react-router-dom';

import { HOME_PATH, CONTACT_PATH, LOGIN_PATH } from '../../constants/routes';
import { useAuth } from '../../hook/useAuthState';

import './Navigation.css';

function Navigation() {
  const { auth, logOut } = useAuth();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        display: 'flex',
        borderBottom: '1px solid #ccc',
        paddingBottom: '1rem',
      }}
    >
      <NavLink to={HOME_PATH} className="nav-link">
        Home
      </NavLink>

      <NavLink to={CONTACT_PATH} className="nav-link">
        Contact
      </NavLink>

      {!auth.isLoggedIn && (
        <NavLink to={LOGIN_PATH} className="nav-link">
          Login
        </NavLink>
      )}
      {auth.isLoggedIn && (
        <button className="btn btn-link" onClick={logOut}>
          Log Out
        </button>
      )}
    </nav>
  );
}

export default Navigation;
