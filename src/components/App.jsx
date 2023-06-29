import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (nameInput, number, reset) => {
    let isExist = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === nameInput.toLowerCase()
    );

    if (isExist) {
      alert(`${nameInput} is already in contacts.`);
      reset();
      return;
    }
    const list = {
      name: nameInput,
      number,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [list, ...contacts],
    }));
  };

  deleteContact = value => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== value),
    }));
  };

  changeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    this.setState({
      contacts: parsedContacts,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {}

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 20,
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        {this.state.contacts.length !== 0 && <h2>Contacts</h2>}
        {this.state.contacts.length !== 0 && (
          <Filter value={this.state.filter} onChange={this.changeFilter} />
        )}
        {this.state.contacts.length !== 0 && (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
