import { useState } from "react";
import TripForm from "./TripForm";

const TripHandler = ({ handleAddTrip }) => {
  const [showInput, setShowInput] = useState(false);

  const handleShowTrip = () => {
    setShowInput(!showInput);
  };

  const handleAddNewTrip = (trip) => {
    handleAddTrip(trip);
    setShowInput(false);
  };

  return (
    <div>
      <button type="button" onClick={handleShowTrip} style={{ marginBottom: "30px" }}>
        New Trip
      </button>
      {showInput && <TripForm handleAddTrip={handleAddNewTrip} />}
    </div>
  );
};

export default TripHandler;
