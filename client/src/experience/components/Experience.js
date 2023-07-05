import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExperienceHandler from "./ExperienceHandler";
import { addExperience } from "../reducers/reducer";

export default function Experience() {
  const location = useLocation();
  const tripUUID = location.state.tripUUID;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddExperience = (exp) => {
    dispatch(addExperience(exp));
    navigate("/trip");
  };

  return (
    <div>
      <h1>Add an Experience</h1>
      <ExperienceHandler
        tripUUID={tripUUID}
        handleAddExperience={handleAddExperience}
      />
    </div>
  );
}
