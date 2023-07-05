// import { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = { name: '', number: '' };

const userSchema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().required(),
});

export const ContactForm = ({ onSubmit }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChange = event => {
  //   const { name, value } = event.currentTarget;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = (values, actions) => {
    // event.preventDefault();
    const { name, number } = values;
    console.log(values.name);
    console.dir(actions);
    onSubmit(name, number);
    actions.resetForm();
    // reset();
  };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

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
            // value={name}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // onChange={handleChange}
          />
          <ErrorMessage name="name" component="div" />
        </label>
        <label className={css.label}>
          <span className={css.text}>Number:</span>
          <Field
            type="tel"
            name="number"
            // value={number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // onChange={handleChange}
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
