import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import * as selectors from './../redux/selectors';

export const App = () => {
  const contacts = useSelector(selectors.selectContacts);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.selectIsLoading);
  const error = useSelector(selectors.selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length !== 0 && <h2>Contacts</h2>}
      {contacts.length !== 0 && <Filter />}
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
};
