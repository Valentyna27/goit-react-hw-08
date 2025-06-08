import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import './UserMenu.modules.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="userMenuWrapper">
      <p className="userMenuText"> Welcome, {user.name} 👋</p>
      <button className="logOutButton" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
