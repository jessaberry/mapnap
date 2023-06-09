import React, { useState } from 'react';
const PageDining = () => {
    const [reservations, addReservations] = useState([]);

    return(
        <div>
            <h1>Dining</h1>
        
            <p>OPENTABLE WIDGET????</p>
            <p>ADD A NEW RESO HERE</p>
            
            <h2>View your reservations</h2>
            {<ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                    <p>Name: {reservation.name}</p>
                    <p>Date: {reservation.date}</p>
                    <p>Time: {reservation.time}</p>
                    </li>
                ))}
            </ul>}



        </div>
    )
};
  
export default PageDining;