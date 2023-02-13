import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import initialContacts from './initialContacts.json';
import { nanoid } from 'nanoid';
import './PhonebookHooks.css';

interface IContacts {
  contacts: {
    id: string;
    name: string;
    number: string;
  };
}

function Phonebook() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contact') || '[]') ??
      initialContacts,
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = (event: React.FormEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const submitForm = (name: string, number: string) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (contacts.find((cont: { name: string }) => cont.name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    setContacts((prevState: IContacts[]) => [...prevState, contact]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact: { name: string }) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = (id: string) => {
    setContacts(
      contacts.filter((contact: { id: string }) => contact.id !== id),
    );
  };

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={submitForm} />
      <h1>Contacts</h1>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default Phonebook;
