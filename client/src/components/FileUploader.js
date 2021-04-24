import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import { getFileInfo } from '../utils/API';


export const FileUploader = ({ className }) => (
  <div className={className}>
  <h2>File Uploader</h2>
  <p>Here you can enter upload file and get its info.</p>
    <Formik
      initialValues={{ upfile: null }}
      onSubmit={(values) => {
        const formData = new FormData();
        formData.append('upfile', values.upfile);

        getFileInfo(formData).then(res => {
          console.log("INFO: ", res.data);
        }).catch(err => console.log(err))
      }}
    >
      {({ handleSubmit, values, setFieldValue}) => (
        <Form onSubmit={handleSubmit}>
          <input
            type="file"
            name="upfile"
            onChange={(event) => {setFieldValue("upfile", event.currentTarget.files[0])}}
          />
          <ErrorMessage name="upfile"/>
          <button type="submit">Get info</button>
        </Form>
      )}
    </Formik>
  </div>
);
