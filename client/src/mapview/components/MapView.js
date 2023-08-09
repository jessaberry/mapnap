import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { PageLayout } from "../../content/template/page-layout.mjs";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getTripsByUserIdAsync,
  getPOIAsync,
} from "../../trip/reducers/thunksTrip";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const attrib =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>';

const url = "https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png";

export default function Map() {
  const { user } = useAuth0();
  const userID = user?.sub;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTripsByUserIdAsync(userID));
    dispatch(getPOIAsync());
  }, [dispatch, userID]);

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

        {markerArray.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <MapContainer
            center={[35.676, 139.65]}
            bounds={bounds}
            scrollWheelZoom={true}
          >
            <TileLayer attribution={attrib} url={url} />
            {markerArray.map(({ lat, lng, name }, index) => (
              <Marker position={[lat, lng]} key={index}>
                <Popup>
                  {name}
                  <br />
                  Latitude: {lat}
                  <br />
                  Longitude: {lng}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </PageLayout>
  );
}
