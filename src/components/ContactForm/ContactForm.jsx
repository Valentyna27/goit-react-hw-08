import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

import './ContactForm.modules.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const schema = Yup.object().shape({
    name: Yup.string().min(2).required('Required'),
    number: Yup.string().required('Required'),
  });

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className="formContact">
          <div className="inputsWrapperContact">
            <label className="formLabelContact">Name</label>
            <Field className="inputContact" type="text" name="name" />
            <ErrorMessage
              className="messageContact"
              name="name"
              component="div"
            />
          </div>

          <div className="inputsWrapperContact">
            <label className="formLabelContact">Number</label>
            <Field className="inputContact" type="tel" name="number" />
            <ErrorMessage
              className="messageContact"
              name="number"
              component="div"
            />
          </div>

          <button className="formBtnContact" type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
