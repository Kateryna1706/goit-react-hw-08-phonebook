import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';

const initialValues = { name: '', number: '' };

const userSchema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().positive().integer().required(),
});

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  console.log(contacts);

  const handleSubmit = (values, actions) => {
    const { name: valueName, number } = values;

    let isExist = contacts.length !== 0 && contacts.some(
      ({ name }) => name.toLowerCase() === valueName.toLowerCase()
    );
    if (isExist) {
      alert(`${valueName} is already in contacts.`);
      return;
    }

    dispatch(addContact(valueName, number));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.text}>Name:</span>
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component="div" />
        </label>
        <label className={css.label}>
          <span className={css.text}>Number:</span>
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component="div" />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
