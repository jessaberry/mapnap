import React from "react";
import "./card.css";
import sampleImage from "./Pariss.jpeg";
import tokyoImage from "./Tokyyo.png";
import ParameterList from "./ParameterList";

const cities = [
  {
    destination: "Paris",
    image: sampleImage,
    duration: "5D, 4N",
  },
  {
    destination: "Tokyo",
    image: tokyoImage,
    duration: "4D, 3N",
  },
];

function Card({ onClose }) {
  return (
    <div>
      {cities.map((city, index) => (
        <div className="inline-cards">
          <div className="card" key={index}>
            <div className="card-content">
              <div className="title-bar">
                <h3>
                  {city.destination} ({city.duration})
                </h3>
                <button className="close-button" onClick={onClose}>
                  X
                </button>
              </div>
              <div className="image-container">
                <img
                  src={city.image}
                  alt={city.destination}
                  className="card-image"
                />
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
