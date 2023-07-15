import React from "react";
import Navbar from "../../Navbar";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExperienceHandler from "./ExperienceHandler";
import { addExperience } from "../reducers/reducer";
import { PageLayout} from "../../content/template/page-layout.mjs";

export default function Experience() {
  const location = useLocation();
  const tripUUID = location.state?.tripUUID;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddExperience = (exp) => {
    dispatch(addExperience(exp));
    navigate("/trip");
  };

  return (
    <PageLayout>
    <div>

      <h1>Add an Experience</h1>
      <ExperienceHandler
        tripUUID={tripUUID}
        handleAddExperience={handleAddExperience}
      />
    </div>
    </PageLayout>
  );
}