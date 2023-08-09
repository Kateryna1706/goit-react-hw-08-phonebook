import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Label, FormContact, Button } from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const userSchema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().positive().integer().required(),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;

    let isExist =
      contacts.length !== 0 &&
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    actions.resetForm();
  };

  return (
    <FormContact>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label>
            <span>Number:</span>
            <Field
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage name="number" component="div" />
          </Label>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </FormContact>
  );
};
