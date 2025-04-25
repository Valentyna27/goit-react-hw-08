import Contact from '../Contact/Contact';
import './ContactList.modules.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className="contactsBook">
      {contacts.map(({ id, name, number }) => (
        <li className="contactBookItem" key={id}>
          <Contact name={name} number={number} onDelete={() => onDelete(id)} />
        </li>
      ))}
    </ul>
  );
}
