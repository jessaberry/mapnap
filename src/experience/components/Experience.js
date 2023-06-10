import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "../reducers/store";
import Form from "./Form";

function Experience() {
  const experiences = useSelector((state) => state.exp.experiences);

  return (
    <div>
      <h1>Add an experience</h1>
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

//TODO: REMOVE FROM HERE
function App() {
  return (
    <Provider store={store}>
      <Experience />
    </Provider>
  );
}
// REMOVE TO HERE

export default App;
