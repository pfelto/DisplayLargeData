import React from "react";

export default function PartyListItem({ firstName, lastName, rsvp }) {
  return (
    <div style={{ flex: 1, border: "1px solid black" }}>
      {firstName + " "} {lastName + " "}RSVP'd: {rsvp ? "yes" : "no"}
    </div>
  );
}
