import LoginForm from '../components/LoginForm/LoginForm';
import '../pages/LoginPage.modules.css';

export default function LoginPage() {
  return (
    <div className="loginContainer">
      <h2 className="loginTitle">Please, log in 🔐</h2>
      <LoginForm />
    </div>
  );
}
