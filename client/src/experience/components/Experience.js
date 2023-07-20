import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExperienceHandler from "./ExperienceHandler";
import { PageLayout } from "../../content/template/page-layout.mjs";
import { addExperienceAsync } from "../reducers/thunksExperience";

export default function Experience() {
  const location = useLocation();
  const trip = location.state?.tripUUID;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddExperience = (exp) => {
    dispatch(addExperienceAsync(exp));
    navigate("/trips");
  };

  return (
    <PageLayout>
      <div>
        <h1>Add an Experience</h1>
        <ExperienceHandler
          trip={trip}
          handleAddExperience={handleAddExperience}
        />
      </div>
    </PageLayout>
  );
}
