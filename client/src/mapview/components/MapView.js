import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import SocialButtons from "../../sharing/SocialButtons";
import React from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const testPos = [51.505, -0.09];
const attrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>';
const url = "https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png";

export default function Map() {
  return (
    <div>
      <Navbar />

    <MapContainer center = {[35.676, 139.650]} zoom = {2} scrollWheelZoom={true}> {/*center can probably be average of all markers? if not centered view on greenwich*/}
      <TileLayer
      attribution={attrib}
      url={url}>
      </TileLayer>
      <Marker position = {[35.676, 139.650]}>
        <Popup>
          Trip to Japan, 2023
          <br />
          <Link to={'/'}>{'Trip'}</Link> 
        </Popup>
      </Marker>
      <Marker position = {[37.552, 126.9918]}>
        <Popup>
          Trip to Korea, 2019
          <br />
          <Link to={'/'}>{'Trip'}</Link> 
        </Popup>
      </Marker>
      <Marker position = {testPos}>
        <Popup>
          Trip to Europe, 2022
          <br />
          <Link to={'/'}>{'Trip'}</Link> 
        </Popup>
        {/*TODO: create function that will render x amount of markers instead of a static one*/}
      </Marker>
    </MapContainer>
      </div>
  )
}

// TODO: connect state with map and have it update every time it is rendered again, show trips
