import * as React from "react";
import { Button, Select, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { useState } from "react";
import MediaFileUploader from "../../helpers/media-files/media-file-uploader.mjs";
import ObjectID from "bson-objectid";
import { upsertSingleMemoryAsync } from "../reducers/memory-thunks.mjs";

const initialState = {
  _id: "",
  title: "",
  description: "",
  latitude: "",
  longitude: "",
  userId: "",
  tripId: "",
  experienceId: "",
  url: "",
};

function MemoryForm(props, children) {
  const dispatch = useDispatch();
  const userId = props.userId;

  const uploadUrl = useSelector((state) => state.s3.uploadUrl);
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const memoryId = new ObjectID();
    dispatch(upsertSingleMemoryAsync(data));
    setButtonEnabled(true);
  };

  const [formData, setFormData] = useState(initialState);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [experiences, setExperiences] = useState(props.experiences);

  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  const { error, pristine, submitting } = props;
  return (
    <div style={{ width: 500 + "px" }}>
      <MediaFileUploader
        onChange={onChangeInput}
        id="mediaFile"
      ></MediaFileUploader>
      <form id="MemoryForm" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="title"
          label="Title"
          fullWidth={true}
          required={props.isShown}
          onChange={onChangeInput}
          {...register("title")}
        ></TextField>
        <br />
        <br />
        <TextField
          id="description"
          label="Description"
          multiline={true}
          rows="5"
          fullWidth={true}
          onChange={onChangeInput}
          {...register("description")}
        ></TextField>
        <br />
        <br />
        <TextField
          id="latitude"
          label="Latitude"
          aria-valuemin={-90}
          aria-valuemax={90}
          type={"number"}
          inputProps={{
            step: 0.001,
          }}
          defaultValue={34.6937}
          {...register("latitude")}
        ></TextField>
        <TextField
          id="longitude"
          label="Longitude"
          aria-valuemin={-180}
          aria-valuemax={180}
          defaultValue={135.5023}
          type={"number"}
          inputProps={{
            step: 0.001,
          }}
          onChange={onChangeInput}
          {...register("longitude")}
        ></TextField>
        <br />
        <br />

        <TextField
          id="userId"
          hidden
          label="User"
          value={userId}
          InputProps={{ readOnly: true, hidden: true }}
          fullWidth={true}
          {...register("userId", { required: true })}
        ></TextField>
        <br />
        <br />

        <TextField
          id="url"
          label="Url"
          value={
            isValidUrl(uploadUrl)
              ? new URL(uploadUrl).origin + new URL(uploadUrl).pathname
              : ""
          }
          InputProps={{ readOnly: true, hidden: true }}
          fullWidth={true}
          {...register("url", { required: true })}
        ></TextField>
        <br />
        <br />

        <Select
          id="experienceId"
          label="Experience"
          fullWidth={true}
          native
          {...register("experienceId", { required: true })}
          onChange={onChangeInput}
        >
          {experiences.map(function (experience) {
            return (
              <option key={experience._id} value={experience._id}>
                {experience.Title}
              </option>
            );
          })}
        </Select>
        <br />
        <br />

        <Button type="submit" fullWidth={true} className="SauderButton" disabled={!buttonEnabled}>
          Add Memory
        </Button>
      </form>
    </div>
  );
}

export default MemoryForm;
