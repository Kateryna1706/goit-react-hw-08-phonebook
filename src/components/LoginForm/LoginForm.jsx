import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormLogin, Label, Button } from './LoginForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = { email: '', password: '' };

const userSchema = Yup.object().shape({
  email: Yup.string().min(2).max(70).required(),
  password: Yup.string().min(2).max(70).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;

    dispatch(
      logIn({
        email,
        password,
      })
    );
    actions.resetForm();
  };

  return (
    <FormLogin>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </Label>
          <Label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </Label>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </FormLogin>
  );
};
