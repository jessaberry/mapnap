import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { PageLayout } from "../../content/template/page-layout.mjs";

let DefaultIcon = L.icon({                                           // used for initializing the default marker for the map itself, so all markers are consistent
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const attrib =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>';
const url = "https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png"; // all for attribution purposes, change it if you want to move from watercolour theme
                                                                      // doesnt need to be in .env or private as these are public attributions, not personal

export default function Map() {
  const trips = useSelector((state) => state.trip.trips);             // grabs trips that are currently in the state
  const poi = useSelector((state) => state.trip.poi);

  const getPOI = (id, type) => {                                      // helper for poi
    const loc = poi.find((point) => point.PointOfInterestId === id);
    return type === "lat" ? loc.Latitude : loc.Longitude;
  };

  return (
    <PageLayout>
      <div>
        <h1>Map View</h1>
        <MapContainer center={[35.676, 139.65]} zoom={2} scrollWheelZoom={true}>
          <TileLayer attribution={attrib} url={url} />
          {trips.length > 0 && trips.map((trip) => {  {/* this entire block is meant to simply render the markers over and over again */}
            return (
              <Marker
                key={trip.TripId}
                position={[
                  getPOI(trip.PointOfInterestId, "lat"),
                  getPOI(trip.PointOfInterestId, "long"),
                ]}
              >
                <Popup>
                  {trip.Title}
                  <br />
                  {trip.Description}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </PageLayout>
  );
}
