import * as React from "react";
import { Form, Field } from "redux-form";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import "react-dropzone-uploader/dist/styles.css";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

function MemoryForm(props, children) {
  const memories = useSelector((state) => state.mem.memories);
  const getUploadParams = ({ meta }) => {
    const url = "https://httpbin.org/post";
    return {
      url,
      meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` },
    };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="title"
          type="text"
          component={renderField}
          label="Title"
        ></Field>
        <Field
          name="description"
          type="text"
          component={renderField}
          label="Description"
        ></Field>
        <Dropzone>
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept="image/*,audio/*,video/*" inputContent=
          {(files, extra) =>
            extra.reject ? "Image, audio and video files only" : "Drag Files"
          }
          styles=
          {{
            dropzoneReject: { borderColor: "red", backgroundColor: "#DAA" },
            inputLabel: (files, extra) =>
              extra.reject ? { color: "red" } : {},
          }}
        </Dropzone>
      </form>
    </>
  );
}

export default memoryForm({
  form: "MemoryForm", // a unique identifier for this form
})(MemoryForm);
