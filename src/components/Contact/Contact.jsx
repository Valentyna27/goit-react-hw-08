import './Contact.modules.css';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { FaPhoneSquareAlt } from 'react-icons/fa';

export default function Contact({ name, number, onDelete }) {
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
      <button className="deleteBtn" onClick={onDelete}>
        Delete
      </button>
    </>
  );
}
