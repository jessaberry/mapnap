import * as React from "react";
import { Form, Field } from "redux-form";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, TextField, Typography } from "@mui/material";
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
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences);

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <TextField id="title"></TextField>
        <TextField id="description"></TextField>
      </form>
    </>
  );
}

export default memoryForm({
  form: "MemoryForm", // a unique identifier for this form
})(MemoryForm);
