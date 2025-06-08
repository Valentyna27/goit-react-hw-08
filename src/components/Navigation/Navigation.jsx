import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import './Navigation.modules.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="navWrapper">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'navLink navLinkActive' : 'navLink'
        }
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? 'navLink navLinkActive' : 'navLink'
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
