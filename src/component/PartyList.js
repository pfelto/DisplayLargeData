import React from "react";
import { useGetData } from "../hooks/useGetData";
import NavigationButtons from "./partylistcomponents/NavigationButtons";
import PartyListItem from "./partylistcomponents/PartyListItem";
import Toolbar from "./partylistcomponents/Toolbar";

export const PartyList = () => {
  const { status, currentUrl, data, error, dispatch } = useGetData();

  //console.log(currentUrl);

  function handleChange(e, id) {
    //console.log(currentUrl);
    let object = data.find((element) => element.id === id);
    //console.log(object);
    object = { ...object, attending: e.target.checked };
    //console.log(object);
    //code to do put
    fetch(`http://localhost:3001/people/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          const Error400 = new Error("4** Error when updating");
          dispatch({
            type: "rejected",
            status: "rejected",
            error: Error400,
          });
          throw Error400;
        }
      })
      .then((data) => {
        //dispatch({ type: "pending", status: "pending" }); causes the ...loading to false for 1ms
        fetch(currentUrl)
          .then((res) => {
            if (res.ok) {
              //console.log(res.headers.get("Link"));
              return res.json();
            } else {
              throw new Error("You got an error");
            }
          })
          .then(
            (data) =>
              dispatch({
                type: "resolved",
                status: "resolved",
                data,
              }),
            (error) =>
              dispatch({
                type: "rejected",
                status: "rejected",
                error,
              })
          );
      })
      .catch((error) => {
        dispatch({
          type: "rejected",
          status: "rejected",
          error,
        });
      });
    //need to get the one object that needs to change then change it using put and after run a get that saves to data in reducer state
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
