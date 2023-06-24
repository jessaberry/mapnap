import React, { useState } from "react";
import "./DropDownMenu.css";

function DropdownMenu() {
  const [selectedView, setSelectedView] = useState("map");

  const handleViewChange = (e) => {
    setSelectedView(e.target.value);
  };

  return (
    <div className="dropdown-menu">
      <select value={selectedView} onChange={handleViewChange}>
        <option value="map">Map View</option>
        <option value="calendar">Calendar View</option>
      </select>

      {selectedView === "map" && (
        <div>
          {/* TODO: Render map view component */}
          {/*<h3>Map View</h3>*/}
          {/* Other map view components */}
        </div>
      )}

      {selectedView === "calendar" && (
        <div>
          {/* TODO: Render calendar view component */}
          {/*<h3>Calendar View</h3>*/}
          {/* Other calendar view components */}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
