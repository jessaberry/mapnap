import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
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
  const tripsFromState = useSelector((state) => state.trip.trips);
  const poi = useSelector((state) => state.trip.poi);

  const getPOI = (id, type) => {
    if (!tripsFromState) {
      return <div>Loading...</div>;
    }
    const loc = poi.find(
      (point) => Number(point.PointOfInterestId) === Number(id)
    );
    if (loc) {
      return type === "lat" ? loc.Latitude : loc.Longitude;
    } else {
      return null;
    }
  };

  const markerArray = tripsFromState.map((trip) => {
    const lat = getPOI(trip.StartingPointOfInterestId, "lat");
    const lng = getPOI(trip.StartingPointOfInterestId, "long");
    const name = trip.Title;
    return { lat, lng, name };
  });

  const lats = markerArray.map(({ lat }) => lat).filter((lat) => lat !== null);
  const longs = markerArray.map(({ lng }) => lng).filter((lng) => lng !== null);
  const bounds = [
    [Math.min(...lats), Math.min(...longs)],
    [Math.max(...lats), Math.max(...longs)],
  ];

  return (
    <PageLayout>
      <div>
        <h1>Map View</h1>
        <MapContainer
          center={[35.676, 139.65]}
          bounds={bounds}
          scrollWheelZoom={true}
        >
          <TileLayer attribution={attrib} url={url} />

          {trips.length > 0 &&
            trips.map((trip) => {
              {
                /* this entire block is meant to simply render the markers over and over again */
              }
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
=
        </MapContainer>
      </div>
    </PageLayout>
  );
}
