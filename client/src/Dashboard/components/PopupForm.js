import React, { useState } from 'react';
import "./PopupForm.css";


const PopupForm = ({ onSubmit, onClose }) => {
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [image, setImage] = useState('');

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ destination, startDate, endDate, image });
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                <form onSubmit={handleSubmit}>
                    <label>
                        Destination:
                        <input type="text" value={destination} onChange={handleDestinationChange} />
                    </label>
                    <label>
                        Start Date:
                        <input type="date" value={startDate} onChange={handleStartDateChange} />
                    </label>
                    <label>
                        End Date:
                        <input type="date" value={endDate} onChange={handleEndDateChange} />
                    </label>
                    <label>
                        Image:
                        <input type="text" value={image} onChange={handleImageChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
