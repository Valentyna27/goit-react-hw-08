import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LoginForm.modules.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values)).then(() => {
      actions.resetForm();
      navigate('/contacts');
    });
  };

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6).required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className="form">
        <label className="formLabel" htmlFor="email">
          Email
        </label>
        <div className="inputWrapper">
          <FaEnvelope className="inputIcon" />
          <Field className="input" type="email" name="email" id="email" />
        </div>
        <ErrorMessage name="email" component="div" className="error" />

        <label className="formLabel" htmlFor="password">
          Password
        </label>
        <div className="inputWrapper">
          <FaLock className="inputIcon" />
          <Field
            className="input"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <ErrorMessage name="password" component="div" className="error" />

        <button className="formButton" type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
