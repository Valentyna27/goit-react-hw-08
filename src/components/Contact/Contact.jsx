import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../../redux/contacts/operations';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import './Contact.modules.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  return (
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
      <button className="deleteBtn" onClick={() => setIsModalOpen(true)}>
        Delete
      </button>
      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modal">
            <p>Are you sure you want to delete this contact?</p>
            <div className="modalButtons">
              <button className="yesBtn" onClick={handleDelete}>
                Yes
              </button>
              <button className="noBtn" onClick={() => setIsModalOpen(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
