import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

export const AddContact = (nameInput, number) => {
  const contacts = useSelector(state => state.contacts);

  let isExist = contacts.some(
    ({ name }) => name.toLowerCase() === nameInput.toLowerCase()
  );
  if (isExist) {
    alert(`${nameInput} is already in contacts.`);
    return;
  }
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: nameInput,
      number,
    },
  };
};
export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};
export const changeFilter = value => {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
};
