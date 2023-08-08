import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={css.listItem}>
          <span className={css.text}>
            {name}: {number}
          </span>
          <button
            type="text"
            onClick={() => handleDelete(id)}
            className={css.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
