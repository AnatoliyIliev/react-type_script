import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import initialContacts from './initialContacts.json';
import { nanoid } from 'nanoid';
import './02-phonebook/Phonebook.css';

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
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (contacts.find(con => con.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

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

  deleteContact = (id: string) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.submitForm} />
        <h1>Contacts</h1>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
