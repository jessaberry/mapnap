import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import initialExperience from "../reducers/initialExperience";
import { v4 as uuidv4 } from "uuid";
import { parseISO } from "date-fns";

const ExperienceHandler = ({ trip, handleAddExperience }) => {
  const [data, setData] = useState({ 
    ...initialExperience, 
    TripId: trip.TripId,
    StartingLocalDateTime: new Date(),
    EndingLocalDateTime: new Date()
  });

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
      StartingLocalDateTime: parseISO(data.StartingLocalDateTime),
      EndingLocalDateTime: parseISO(data.EndingLocalDateTime),
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
