import React from "react";

export default function PartyListItem({ firstName, lastName }) {
  return (
    <div style={{ flex: 1, border: "1px solid black" }}>
      {firstName + " "} {lastName}
    </div>
  );
}
