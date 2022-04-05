import React, { Component } from 'react';
import ContactForm from './02-phonebook/ContactForm';
import Filter from './02-phonebook/Filter';
import ContactList from './02-phonebook/ContactList';
import initialContacts from './02-phonebook/initialContacts.json';
import { nanoid } from 'nanoid';

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

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.submitForm} />
        <h1>Contacts</h1>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={this.getVisibleContacts()} />
      </div>
    );
  }
}

export default Phonebook;
