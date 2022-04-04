import React, { Component } from 'react';
import ContactForm from './02-phonebook/ContactForm';
import initialContacts from './02-phonebook/initialContacts.json';
import { nanoid } from 'nanoid';

// interface IProps {
//   onSubmitForm: (state: { name: string; number: string }) => void;
// }

interface IState {
  contacts: {
    id: string;
    name: string;
    number: string;
  }[];
  filter: string;
}

class Phonebook extends Component<{}, IState> {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  changeFilter = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ filter: event.currentTarget.value });
  };

  submitForm = (data: { name: string; number: string }) => {
    const { name, number } = data;

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.submitForm} />
        <h1>Contacts</h1>
        <label>
          Find contacts by name{' '}
          <input type="text" value={filter} onChange={this.changeFilter} />
        </label>

        {contacts && (
          <ul>
            {visibleContacts.map(contact => (
              <li key={nanoid()}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Phonebook;
