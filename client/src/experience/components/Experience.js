import React from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";

export default function Experience() {
  const location = useLocation();
  const tripUUID = location.state.tripUUID;
  
  return (
    <div>
      <h1>Add an Experience </h1>
      <Form tripUUID={tripUUID} />
    </div>
  );
}