import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

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
  // const poi = useSelector ((state) => state.trip.poi);
  return (
    <PageLayout>
      <div>
        <h1>Map View</h1>
        <MapContainer center={[35.676, 139.65]} zoom={2} scrollWheelZoom={true}>
          {" "}
          <TileLayer attribution={attrib} url={url}></TileLayer>
          {trips.length > 0 &&  trips.map((trip) => (
            // <Marker position={[poi.Latitude, poi.Longitude]}> {/* this assumes that the coordinates are in [x, y] array form*/}
            <Marker position={[69.69, 136]}> {/* this assumes that the coordinates are in [x, y] array form*/}
            <Popup>
              <Link to={"/"}>{trip.Title}</Link> {/* assumes trip.id si the link itself.... */}
              <br></br>
              {trip.Description} {'\n'} {/* assumes that trip's description is under description... */}
            </Popup>
          </Marker>
           ))
          }
        </MapContainer>
      </div>
    </PageLayout>
  );
}
