import { useState } from "react";
import TripForm from "./TripForm";
import TripPublicViewer from "./TripPublicViewer";
import TripPersonalViewer from "./TripPersonalViewer";
import TripDetails from "./TripDetails";


const TripHandler = ({
  trips,
  publicTrips,
  poi,
  visible,
  getExperiences,
  handleAddTrip,
  handleDeleteTrip,
  handleAddExperience,
  handleDeleteExperience,
  showTripDetails,
}) => {
    const [showInput, setShowInput] = useState(false);

    const handleShowTrip = () => {
        setShowInput(!showInput);
    };

    const handleAddNewTrip = (trip) => {
        handleAddTrip(trip);
        setShowInput(false);
    };
    if (trips.length === 1) {
        return (
<>
    <TripDetails trip={trips}/>
</>

        )
    } else {

        return (
            <div>

                <button
                    type="button"
                    onClick={handleShowTrip}
                    style={{marginBottom: "30px"}}
                >
                    {" "}
                    New Trip
                </button>
                {showInput && <TripForm handleAddTrip={handleAddNewTrip}/>}
                <h2>My trips</h2>
                <TripPersonalViewer
                    trips={trips}
                    poi={poi}
                    visible={visible}
                    getExperiences={getExperiences}
                    showTripDetails={showTripDetails}
                    handleAddExperience={handleAddExperience}
                    handleDeleteExperience={handleDeleteExperience}
                    handleDeleteTrip={handleDeleteTrip}
                />
                <h2>Other people's public trips</h2>
                <TripPublicViewer
                    publicTrips={publicTrips}
                    poi={poi}
                    visible={visible}
                    getExperiences={getExperiences}
                    showTripDetails={showTripDetails}
                />
            </div>
        );
    }
};
export default TripHandler;
