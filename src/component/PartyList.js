import React, { useReducer, useEffect } from "react";
import NavigationButtons from "./partylistcomponents/NavigationButtons";
import PartyListItem from "./partylistcomponents/PartyListItem";
import Toolbar from "./partylistcomponents/Toolbar";
import { fetchApiPagination } from "../utils/fetchApi";
import { startingURL } from "../utils/currentUrl";

export const dataReducer = (_, nextState) => nextState;

export const PartyList = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    status: "idle",
    data: null,
    error: null,
  });

  //console.log(state.currentUrl);

  useEffect(() => {
    let _isMounted = true;
    if (_isMounted) dispatch({ status: "pending" });
    setTimeout(() => {
      fetchApiPagination(startingURL).then(
        (data) => {
          if (_isMounted) {
            dispatch({
              status: "resolved",
              data,
            });
          }
        },
        (error) => {
          if (_isMounted) {
            dispatch({
              status: "rejected",
              error,
            });
          }
        }
      );
    }, 500);
    return () => (_isMounted = false);
  }, []);

  const PartyListArray =
    state.status === "resolved" ? (
      state.data.map((person) => (
        <PartyListItem key={person.id} person={person} />
      ))
    ) : state.status === "pending" ? (
      <p>Loading...</p>
    ) : state.status === "rejected" ? (
      <p>{state.error.message}</p>
    ) : null;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Toolbar />
      {PartyListArray}
      <NavigationButtons />
    </div>
  );
};
