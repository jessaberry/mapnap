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
      {/* TODO: remove this (visual purposes) */}
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <h3>{experience.name}</h3>
            <p>Email: {experience.email}</p>
            <p>Activity: {experience.activity}</p>
            <p>From: {experience.datefrom.toString()}</p>
            <p>To: {experience.dateto.toString()}</p>
            <p>Address: {experience.address}</p>
            <p>Description: {experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

//TODO: remove this
function App() {
  return (
    <Provider store={store}>
      <Experience />
    </Provider>
  );
}

export default App;
