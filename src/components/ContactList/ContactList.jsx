import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import './ContactList.modules.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className="contactsBook">
        {contacts.map(contact => (
          <li className="contactBookItem" key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
