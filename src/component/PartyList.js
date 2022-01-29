import React from "react";
import NavigationButtons from "./partylistcomponents/NavigationButtons";
import PartyListItem from "./partylistcomponents/PartyListItem";
import Toolbar from "./partylistcomponents/Toolbar";

export const PartyList = () => {
  const PartyListArray = Array(30)
    .fill("X")
    .map((_, index) => <PartyListItem key={index} itemNum={index + 1} />);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Toolbar />
      {PartyListArray}
      <NavigationButtons />
    </div>
  );
};
