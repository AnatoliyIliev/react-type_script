import '../PhonebookHooks.css';
import { nanoid } from 'nanoid';

interface IProps {
  contacts: {
    id: string;
    name: string;
    number: string;
  }[];
  onDeleteContact: (id: string) => void;
}

const ContactList = ({ contacts, onDeleteContact }: IProps) => {
  return (
    <div>
      <ul className="contact_list">
        {contacts.map(({ id, name, number }) => (
          <li key={nanoid()}>
            {name}: {number}
            <button
              className="contact_list-button"
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
