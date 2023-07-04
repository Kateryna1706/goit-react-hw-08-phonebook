import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filterValue, setFilter] = useState('');

  const addContact = (nameInput, number, reset) => {
    let isExist = contacts.some(
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
    setContacts(prevState => [list, ...prevState]);
  };

  const deleteContact = value => {
    setContacts(prevState => prevState.filter(({ id }) => id !== value));
  };

  const changeFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const countVisibleContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
      <ContactForm onSubmit={addContact} />
      {contacts.length !== 0 && <h2>Contacts</h2>}
      {contacts.length !== 0 && (
        <Filter value={filterValue} onChange={changeFilter} />
      )}
      {contacts.length !== 0 && (
        <ContactList
          contacts={countVisibleContacts()}
          onDelete={deleteContact}
        />
      )}
    </div>
  );
};
