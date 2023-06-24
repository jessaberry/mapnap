import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const init = {
  uuid: "",
  userID: "",
  title: "",
  description: "",
  isPublic: ""
};

const Form = ({ handleAddTrip }) => {
  const [data, setData] = useState(init);
  const [showInput, setShowInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleShowTrip = (e) => {
    e.preventDefault();
    setShowInput(true);
  };

  const handleAddNewTrip = (e) => {
    e.preventDefault();
    const uuid = uuidv4();
    const trip = { ...data, uuid: uuid};
    handleAddTrip(trip);
    setShowInput(false);
    setData(init);
  };

  return (
    <div>
      <form>
        <button type="button" onClick={handleShowTrip}>
          Make New Trip
        </button>
        {showInput && (
          <>
            <input
              type="text"
              name="userID"
              value={data.userID}
              onChange={handleChange}
              placeholder="Enter user ID"
            />
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              placeholder="Enter trip title"
            />
            <input
              type="text"
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Enter trip description"
            />
            <input
              type="text"
              name="isPublic"
              value={data.isPublic}
              onChange={handleChange}
              placeholder="Enter public status"
            />
            <button type="submit" onClick={handleAddNewTrip}>
              Add Trip
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;

