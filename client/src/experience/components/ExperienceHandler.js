import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import initialExperience from "../reducers/initialExperience";
import { v4 as uuidv4 } from "uuid";

const ExperienceHandler = ({ tripUUID, handleAddExperience }) => {
  const [data, setData] = useState({ ...initialExperience, TripId: tripUUID });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expId = uuidv4();
    const experience = {
      ...data,
      ExperienceId: expId,
      StartingLocalDateTime: data.StartingLocalDateTime.toISOString(),
      EndingLocalDateTime: data.EndingLocalDateTime.toISOString(),
    };
    handleAddExperience(experience);
    setData(initialExperience);
  };

  const handleReset = () => {
    setData(initialExperience);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <ExperienceForm data={data} handleChange={handleChange} />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default ExperienceHandler;