import { nanoid } from 'nanoid';

export const addContact = (nameInput, number) => {
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
