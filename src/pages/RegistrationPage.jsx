import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import '../pages/RegistrationPage.modules.css';

export default function RegistrationPage() {
  return (
    <div className="registrationWrapper">
      <h2 className="registrationTitle">
        Please, register to get access to the app 💻
      </h2>
      <RegistrationForm />
    </div>
  );
}
