import { nanoid } from 'nanoid';

interface IProps {
  contacts: {
    id: string;
    name: string;
    number: string;
  }[];
}

const ContactList = ({ contacts }: IProps) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={nanoid()}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
