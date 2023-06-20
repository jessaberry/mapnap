import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";

export default function Experience() {
  const experiences = useSelector((state) => state.exp.experiences);

  return (
    <div>
      <h1>Add an Experience </h1>
      <Form />
      {/* TODO: REMOVE FROM HERE */}
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <h3>{experience.name}</h3>
            <p>Image: {experience.image}</p>
            <p>Activity: {experience.activity}</p>
            <p>From: {experience.datefrom.toString()}</p>
            <p>To: {experience.dateto.toString()}</p>
            <p>Address: {experience.address}</p>
            <p>Description: {experience.description}</p>
          </li>
        ))}
      </ul>
      {/* REMOVE TO HERE */}
    </div>
  );
}