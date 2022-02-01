import React, { useRef } from "react";

export default function PartyListItem({
  id,
  firstName,
  lastName,
  rsvp,
  handleChange,
}) {
  const checkRef = useRef(rsvp);

  return (
    <div style={{ flex: 1, border: "1px solid black" }}>
      {firstName + " "} {lastName}
      <div>
        <label htmlFor="rsvp">RSVP</label>
        <input
          id="rvsp"
          type="checkbox"
          ref={checkRef}
          onChange={(e) => handleChange(e, id)}
        ></input>
      </div>
    </div>
  );
}
