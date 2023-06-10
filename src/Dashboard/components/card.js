// import React, { useState } from 'react';
//
// function TravelDashboard() {
//     const [trips, setTrips] = useState([]);
//     const [isAddingTrip, setIsAddingTrip] = useState(false);
//     const [newTrip, setNewTrip] = useState({
//         destination: '',
//         startDate: '',
//         endDate: ''
//     });
//
//     const handleAddTrip = () => {
//         setIsAddingTrip(true);
//     };
//
//     const handleInputChange = (e) => {
//         setNewTrip({
//             ...newTrip,
//             [e.target.name]: e.target.value
//         });
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         // Add new trip to the trips array
//         setTrips([...trips, newTrip]);
//
//         // Reset the newTrip state
//         setNewTrip({
//             destination: '',
//             startDate: '',
//             endDate: ''
//         });
//
//         // Reset the isAddingTrip state
//         setIsAddingTrip(false);
//     };
//
//     return (
//         <div>
//             <h1>Travel Dashboard</h1>
//
//             {isAddingTrip ? (
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         Destination:
//                         <input
//                             type="text"
//                             name="destination"
//                             value={newTrip.destination}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Start Date:
//                         <input
//                             type="date"
//                             name="startDate"
//                             value={newTrip.startDate}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         End Date:
//                         <input
//                             type="date"
//                             name="endDate"
//                             value={newTrip.endDate}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <br />
//                     <button type="submit">Add Trip</button>
//                 </form>
//             ) : (
//                 <button onClick={handleAddTrip}>Add Trip</button>
//             )}
//
//             <h2>Trips:</h2>
//             <ul>
//                 {trips.map((trip, index) => (
//                     <li key={index}>
//                         <strong>Destination:</strong> {trip.destination},{' '}
//                         <strong>Start Date:</strong> {trip.startDate},{' '}
//                         <strong>End Date:</strong> {trip.endDate}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
//
// export default TravelDashboard;

// import React, { useState } from 'react';
// import "./card.css"
//
// function TravelDashboard() {
//     const [trips, setTrips] = useState([]);
//     const [isAddingTrip, setIsAddingTrip] = useState(false);
//     const [newTrip, setNewTrip] = useState({
//         destination: '',
//         startDate: '',
//         endDate: ''
//     });
//
//     const handleAddTrip = () => {
//         setIsAddingTrip(true);
//     };
//
//     const handleInputChange = (e) => {
//         setNewTrip({
//             ...newTrip,
//             [e.target.name]: e.target.value
//         });
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         // Add new trip to the trips array
//         setTrips([...trips, newTrip]);
//
//         // Reset the newTrip state
//         setNewTrip({
//             destination: '',
//             startDate: '',
//             endDate: ''
//         });
//
//         // Reset the isAddingTrip state
//         setIsAddingTrip(false);
//     };
//
//     return (
//         <div>
//             <h1>Travel Dashboard</h1>
//
//             {isAddingTrip ? (
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         Destination:
//                         <input
//                             type="text"
//                             name="destination"
//                             value={newTrip.destination}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Start Date:
//                         <input
//                             type="date"
//                             name="startDate"
//                             value={newTrip.startDate}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         End Date:
//                         <input
//                             type="date"
//                             name="endDate"
//                             value={newTrip.endDate}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <br />
//                     <button type="submit">Add Trip</button>
//                 </form>
//             ) : (
//                 <button onClick={handleAddTrip}>Add Trip</button>
//             )}
//
//             <h2>Trips:</h2>
//             <div className="gallery">
//                 {trips.map((trip, index) => (
//                     <div key={index} className="card">
//                         <h3>{trip.destination}</h3>
//                         <p>
//                             <strong>Start Date:</strong> {trip.startDate}
//                         </p>
//                         <p>
//                             <strong>End Date:</strong> {trip.endDate}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
//
// export default TravelDashboard;

// import React from 'react';
// import "./card.css";
// import sampleImage from './Pariss.jpeg';
// import ParameterList from "./ParameterList";
//
// function Card({ destination, image, onClose }) {
//     return (
//         <div className="card">
//             <div className="card-content">
//                 <div className="title-bar">
//                 <h3>Paris   (5D, 4N)</h3>
//                 <button className="close-button" onClick={onClose}>
//                     X
//                 </button>
//                 </div>
//                 <div className="image-container">
//                 <img src={sampleImage} alt={destination} className="card-image" />
//                 </div>
//                 <ParameterList />
//                 <button className="update-button" onClick={onClose}>
//                     Update
//                 </button>
//
//             </div>
//         </div>
//     );
// }
//
// export default Card;

import React from 'react';
import "./card.css";
import sampleImage from './Pariss.jpeg';
import tokyoImage from './Tokyyo.png';

import ParameterList from './ParameterList';

const cities = [
    {
        destination: 'Paris',
        image: sampleImage,
        duration: '5D, 4N'
    },
    {
        destination: 'Tokyo',
        image: tokyoImage,
        duration: '4D, 3N'
    }
];

function Card({ onClose }) {
    return (
        <div>
            {cities.map((city, index) => (
                <div className="inline-cards">
                <div className="card" key={index}>
                    <div className="card-content">
                        <div className="title-bar">
                            <h3>{city.destination} ({city.duration})</h3>
                            <button className="close-button" onClick={onClose}>
                                X
                            </button>
                        </div>
                        <div className="image-container">
                            <img src={city.image} alt={city.destination} className="card-image" />
                        </div>
                        <ParameterList />
                        <button className="update-button" onClick={onClose}>
                            Update
                        </button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
}

export default Card;

