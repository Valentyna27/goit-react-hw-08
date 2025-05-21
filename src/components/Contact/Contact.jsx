import './Contact.modules.css';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div className="contactBox">
        <p className="contactName">
          {' '}
          <RiContactsBook2Fill className="icons" />
          {name}
        </p>
        <p className="contactNumber">
          {' '}
          <FaPhoneSquareAlt className="icons" />
          {number}
        </p>
      </div>
      <button className="deleteBtn" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
