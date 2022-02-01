import React from "react";
import { useGetData } from "../hooks/useGetData";
import NavigationButtons from "./partylistcomponents/NavigationButtons";
import PartyListItem from "./partylistcomponents/PartyListItem";
import Toolbar from "./partylistcomponents/Toolbar";

export const PartyList = () => {
  const { status, currentUrl, data, error, dispatch } = useGetData();

  function handleChange(e, id) {
    const poop = data.map((element) => {
      return element.id === id
        ? element
        : { ...element, attending: e.target.checked };
    });
    console.log(poop);
  }

  const PartyListArray =
    status === "resolved" ? (
      data.map((person) => (
        <PartyListItem
          key={person.id}
          id={person.id}
          firstName={person.first_name}
          lastName={person.lastname}
          rsvp={person.attending}
          handleChange={handleChange}
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
