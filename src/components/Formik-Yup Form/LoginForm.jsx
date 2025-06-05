import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const ValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be minimum 6 characters long')
      .required('Password is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form values :', values);
    alert('Form is submitted');
    resetForm();
  };

  function formRender() {
    return (
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    );
  }

  return (
    <div>
      <h2>Simple Login Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {formRender}
      </Formik>
    </div>
  );
};

export default LoginForm;
