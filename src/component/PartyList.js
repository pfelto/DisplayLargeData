import React from "react";
import { useGetData } from "../hooks/useGetData";
import NavigationButtons from "./partylistcomponents/NavigationButtons";
import PartyListItem from "./partylistcomponents/PartyListItem";
import Toolbar from "./partylistcomponents/Toolbar";

export const PartyList = () => {
  const { status, currentUrl, data, error, dispatch } = useGetData();

  const PartyListArray =
    status === "resolved" ? (
      data.map((person) => (
        <PartyListItem
          key={person.id}
          firstName={person.first_name}
          lastName={person.lastname}
          rsvp={person.attending}
        />
      ))
    ) : status === "pending" ? (
      <p>Loading...</p>
    ) : status === "rejected" ? (
      <p>{error.message}</p>
    ) : null;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Toolbar URL={currentUrl} dispatch={dispatch} />
      {PartyListArray}
      <NavigationButtons URL={currentUrl} dispatch={dispatch} />
    </div>
  );
};
