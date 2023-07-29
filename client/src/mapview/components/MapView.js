import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { PageLayout } from "../../content/template/page-layout.mjs";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const attrib =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>';
const url = "https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png";

export default function Map() {
  const trips = useSelector((state) => state.trip.trips);
  const poi = useSelector((state) => state.trip.poi);
  const getPOI = (id, type) => {
    const loc = poi.find((point) => point.PointOfInterestId === id);
    return type === "lat" ? Number(loc.Latitude) : Number(loc.Longitude);
  };
  return (
    <PageLayout>
      <div>
        <h1>Map View</h1>
        <MapContainer center={[35.676, 139.65]} zoom={2} scrollWheelZoom={true}>
          <TileLayer attribution={attrib} url={url} />
          {trips.length > 0 &&
            trips.map((trip) => (
              <Marker
                key={trip.TripId}
                position={[getPOI(trip.PointOfInterestId, "lat"), getPOI(trip.PointOfInterestId, "long")]}
              >
                <Popup>
                  <Link to={"/"}>{trip.Title}</Link>
                  <br />
                  {trip.Description}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </PageLayout>
  );
}
