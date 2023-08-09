import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Button, List, ListItem, Text } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="text" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
