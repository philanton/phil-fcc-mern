import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  file: Yup.mixed().required("Please, choose file!")
});

export const FileUploader = ({ className }) => (
  <div className={className}>
  <h2>File Uploader</h2>
  <p>Here you can enter upload file and get its info.</p>
    <Formik
      initialValues={{ file: null }}
      onSubmit={(values) => {
        console.log("Sending API request..")
      }}
      validationSchema={schema}
    >
      {({ handleSubmit, values}) => (
        <Form onSubmit={handleSubmit}>
          <Field type="file" name="file"/>
          <ErrorMessage name="file"/>
          <button type="submit">Get info</button>
        </Form>
      )}
    </Formik>
  </div>
);
