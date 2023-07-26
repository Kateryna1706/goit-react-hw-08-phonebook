import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

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
