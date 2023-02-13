import { useState } from "react";
import "./App.css";
import Greet from "./Greet";
import Person from "./Person";
import PersonList from "./PersonList";
import Status from "./Status";
import Heading from "./Heading";
import Oscar from "./Oscar";

function App() {
  const personName = {
    first: "Monkey",
    middle: "D.",
    last: "Luffy",
  };
  const newPersonName = {
    first: "Roronoa",
    last: "Zoro",
  };
  const people = [
    {
      first: "Naruto",
      last: "Uzumaki",
    },
    {
      first: "Sasuke",
      last: "Uchiha",
    },
    {
      first: "Sakura",
      last: "Haruno",
    },
  ];
  return (
    <div className="App">
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Joe Doe" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <Person name={newPersonName} />
      <PersonList names={people} />
      <Status status="success" />
    </div>
  );
}

export default App;
