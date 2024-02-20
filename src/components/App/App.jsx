import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section, ContactForm, ContactList, Filter } from 'components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    const lowerCaseName = name.toLowerCase();

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === lowerCaseName
      )
    ) {
      return alert(`${name} is already in contacts!`);
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filterContactsList;
  };

  filterList = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.filterList} />
          <ContactList
            contacts={this.getFilteredContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
