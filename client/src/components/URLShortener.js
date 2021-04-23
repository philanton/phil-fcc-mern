import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import * as API from '../utils/API';


const schema = Yup.object().shape({
  originalURL: Yup.string().url('Not a valid URL-address!')
});

export const URLShortener = ({ className }) => (
  <div className={className}>
    <h2>URL Shortener</h2>
    <p>Here you can enter some long URL-address to get short one.</p>
    <Formik
      initialValues={{ originalURL: '' }}
      validationSchema={schema}
      onSubmit={values => {
        API.getShortener(values.originalURL)
           .then(res => {
             if(res.data.short_url) {
               console.log("Your shortener: ", res.data.short_url);
             } else {
               console.log("Sorry")
             }
           })
           .catch(err => console.log(err))
      }}
    >
      {({ handleSubmit, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Field type="text" name="originalURL" placeholder="http://www.example.com"/>
          <ErrorMessage name="originalURL"/>
          <button type="submit">Get Short</button>
        </Form>
      )}
    </Formik>
  </div>
);
