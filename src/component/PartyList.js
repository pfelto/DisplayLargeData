import React, { useEffect, useReducer, useState } from "react";
import { fetchApi } from "../utils/fetchApi";
import NavigationButtons from "./partylistcomponents/NavigationButtons";
import PartyListItem from "./partylistcomponents/PartyListItem";
import Toolbar from "./partylistcomponents/Toolbar";

const dataReducer = (_, nextState) => nextState;

export const PartyList = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    status: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    let _isMounted = true;
    if (_isMounted) dispatch({ status: "pending" });
    fetchApi("http://localhost:3001/people", true).then(
      (data) => {
        if (_isMounted) {
          dispatch({ status: "resolved", data, error: null });
        }
      },
      (error) => {
        if (_isMounted) {
          dispatch({ status: "rejected", data: null, error });
        }
      }
    );
    return () => (_isMounted = false);
  }, []);

  //console.log(state.data);
  //console.log(state.status);

  const PartyListArray =
    state.status === "resolved" ? (
      state.data.map((person) => (
        <PartyListItem
          key={person.id}
          firstName={person.first_name}
          lastName={person.last_name}
        />
      ))
    ) : (
      <p>Loading...</p>
    );
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Toolbar />
      {PartyListArray}
      <NavigationButtons />
    </div>
  );
};
