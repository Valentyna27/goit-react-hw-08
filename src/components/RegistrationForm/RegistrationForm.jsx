import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import './RegistrationForm.modules.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(register(values)).then(() => {
      actions.resetForm();
      navigate('/contacts');
    });
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const schema = Yup.object().shape({
    name: Yup.string().min(2).required('Required'),
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
        <label className="formLabel" htmlFor="name">
          Name
        </label>
        <div className="inputWrapper">
          <FaUser className="inputIcon" />
          <Field className="input" type="text" name="name" id="name" />
        </div>
        <ErrorMessage name="name" component="div" className="error" />

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
          Register
        </button>
      </Form>
    </Formik>
  );
}
