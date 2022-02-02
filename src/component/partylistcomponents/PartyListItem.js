import React, { useRef } from "react";

export default function PartyListItem({ person }) {
  console.log(person);
  const checkRef = useRef(person.attending);

  return (
    <div style={{ flex: 1, border: "1px solid black" }}>
      {person.first_name + " "} {person.lastname}
      <div>
        <label htmlFor="rsvp">RSVP</label>
        <input id="rvsp" type="checkbox" ref={checkRef}></input>
      </div>
    </div>
  );
}
