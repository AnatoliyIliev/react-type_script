import { useState } from 'react';
import '../PhonebookHooks.css';

interface IProps {
  onSubmitForm: (name: string, number: string) => void;
}

function ContactForm({ onSubmitForm }: IProps) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const handleTelChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setNumber(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmitForm(name, number);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form_contact">
        Name
        <input
          className="form_contact-input"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="form_contact">
        Number
        <input
          className="form_contact-input"
          type="tel"
          name="number"
          value={number}
          onChange={handleTelChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="form_contact-button" type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
