import { useState } from "react";
import TripForm from "./TripForm";

const TripHandler = ({ handleAddTrip }) => {
  const [showInput, setShowInput] = useState(false);

  const handleShowTrip = () => {
    setShowInput(true);
  };

  const handleAddNewTrip = (trip) => {
    handleAddTrip(trip);
    setShowInput(false);
  };

  return (
    <div>
      <button type="button" onClick={handleShowTrip}>
        Make New Trip
      </button>
      {showInput && <TripForm handleAddTrip={handleAddNewTrip} />}
    </div>
  );
};

export default TripHandler;
