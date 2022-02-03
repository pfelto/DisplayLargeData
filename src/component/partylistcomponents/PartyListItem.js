import React, { useState } from "react";

export default function PartyListItem({
  id,
  firstName,
  lastName,
  rsvp,
  handleChange,
}) {
  const [isChecked, setIsChecked] = useState(rsvp);
  return (
    <div style={{ flex: 1, border: "1px solid black" }}>
      {firstName + " "} {lastName}
      <div>
        <label htmlFor="rsvp">RSVP</label>
        <input
          id="rvsp"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            handleChange(e, id);
          }}
        ></input>
      </div>
    </div>
  );
}
