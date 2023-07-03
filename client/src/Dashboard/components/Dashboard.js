import React from "react";
import { Provider } from "react-redux";
import store from "../../reducers/store";
import DropdownMenu from "./DropDownMenu";
import "./Dashboard.css";
import Card from "./card";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleAddTrip = () => {
    // TODO: Implement logic to handle adding a trip.json
    console.log("Add Trip button clicked!");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <DropdownMenu />
      <div className="trip-button">
        <button onClick={handleAddTrip}>Add Trip</button>
      </div>
      {/* Other components and content */}
      <div className="card-gallery">
        <Card />
      </div>
    </div>
  );
}
export default Dashboard;
