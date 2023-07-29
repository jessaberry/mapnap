import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTripsAsync } from "../reducers/trip-thunks.mjs";
import { useNavigate, Link, Route, Routes, useParams } from "react-router-dom";
import React from "react";
import "./styles.css";
import { PageLayout } from "../../content/template/page-layout.mjs";

export default function Trips() {
  const trips = useSelector((state) => state.trips.TripList);
  console.log(trips);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tripId } = useParams();

  useEffect(() => {
    dispatch(getAllTripsAsync());
  }, [dispatch]);

  console.log(trips);
  return (
    <PageLayout>
      <div>
        <h1>Trip Manager</h1>

        <div className="card-container">
          {trips.map((trip) => (
            <div className="trip-item" key={trip.TripId}>
              <h3 className="trip-title">TRIP - {trip.Title}</h3>
              <p className="trip-info">TRIP id: {trip._id}</p>
              <Link to={`/trips/${trip._id}`}>
                <button>View Trip</button>
              </Link>
              <button>Delete</button>
              <div className="experience-list">
                <h4 className="experience-heading">Experiences:</h4>
                <div className="experience-card-container"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
