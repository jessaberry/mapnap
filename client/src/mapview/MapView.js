// parent component will pass in lng, lat, name and also probably a link to the prop itself but haha im too lazy
import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ locations }) => {
  const renderMarkers = () => {
    return locations.map((location, index) => (
      <Marker
        key={index}
        lat={location.latitude}
        lng={location.longitude}
        name={location.name}
      />
    ));
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAvaznnoBY5LiIDBCMJMMtDKVzWwVmotLw" }}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={1}
      >
        {renderMarkers()}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ name }) => (
  <div style={{ color: "red", fontWeight: "bold" }}>{name}</div>
);

export default Map;
