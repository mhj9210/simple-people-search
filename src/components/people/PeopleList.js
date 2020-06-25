import React from "react";
import Person from "./Person";

const PeopleList = ({ newList }) => {
  return (
    <div className="people_list">
      {newList.map((person) => (
        <Person key={person.id} name={person.name} />
      ))}
    </div>
  );
};

export default PeopleList;
