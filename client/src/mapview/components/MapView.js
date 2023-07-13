import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Link} from "react-router-dom"
import Navbar from "../../Navbar";
import SocialButtons from "../../sharing/SocialButtons";
import React from "react";

const testPos = [51.505, -0.09];

export default function Map() {
  return (
      <div>
          <Navbar />


    <MapContainer center = {testPos} zoom = {13} scrollWheelZoom={true}> {/*center can probably be average of all markers? if not centered view on greenwich*/}
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
      </TileLayer>
      <Marker position = {testPos}>
        <Popup>
          There should be a link to an experience/trip here.
          <Link to={'/'}>{'Something'}</Link> 
        </Popup>
        {/*TODO: create function that will render x amount of markers instead of a static one*/}
      </Marker>
    </MapContainer>
      </div>
  )
}

// TODO: connect state with map and have it update every time it is rendered again, show trips