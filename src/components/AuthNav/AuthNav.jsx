import { NavLink } from 'react-router-dom';
import './AuthNav.modules.css';

export default function AuthNav() {
  return (
    <div className="authWrapper">
      <NavLink to="/register" className="authLink">
        Register
      </NavLink>
      <NavLink to="/login" className="authLink">
        Log in
      </NavLink>
    </div>
  );
}
