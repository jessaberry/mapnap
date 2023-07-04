import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import initialExperience from "../reducers/initialExperience";

const ExperienceHandler = ({ tripUUID, handleAddExperience }) => {
  const [data, setData] = useState({ ...initialExperience, TripId: tripUUID });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddExperience(data);
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
