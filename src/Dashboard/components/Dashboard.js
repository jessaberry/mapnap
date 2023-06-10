import React from 'react';
import {Provider} from "react-redux";
import store from "../../experience/reducers/store";
import DropdownMenu from "./DropDownMenu";
import "./Dashboard.css";
import TravelDashboard from "./card";
import Card from "./card";

function Dashboard() {
    const handleAddTrip = () => {
        // TODO: Implement logic to handle adding a trip
        console.log('Add Trip button clicked!');
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

//TODO: REMOVE FROM HERE
function App() {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
}
// REMOVE TO HERE

export default App;
// export default Dashboard;

