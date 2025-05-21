import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import './ContactList.modules.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);

  const filter = useSelector(state => state.filters.name.toLowerCase());

  const showedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );


  return (
    <ul className="contactsBook">
      {showedContacts.map(({ id, name, number }) => (
        <li className="contactBookItem" key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
