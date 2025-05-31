import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import './ContactForm.modules.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="inputsWrapper">
            <label className="formLabel" htmlFor={nameFieldId}>
              Name
            </label>
            <Field className="input" type="text" name="name" id={nameFieldId} />
            <ErrorMessage className="message" name="name" component="span" />
          </div>

          <div className="inputsWrapper">
            <label className="formLabel" htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className="input"
              type="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage className="message" name="number" component="span" />
          </div>

          <button className="formBtn" type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
