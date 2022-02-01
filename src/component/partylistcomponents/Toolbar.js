import React, { useState, useRef } from "react";
import { sortAsc } from "../../utils/currentUrl";

export default function Toolbar({ URL, dispatch }) {
  const inputRef = useRef(null);
  const [orderAsc, setOrderAsc] = useState(false);

  function onButtonClick() {
    let searchString = "";
    const indexOfsearch = URL.indexOf("_like=");
    let firstPart = URL.slice(0, indexOfsearch + 6);
    if (!firstPart.includes("_page=1")) {
      const indexOfPage = firstPart.indexOf("_page=");
      const firstPart2 = firstPart.slice(0, indexOfPage + 6);
      //console.log(firstPart2);
      const indexOfLimit = firstPart.indexOf("&_limit");
      const secondPart2 = firstPart.slice(indexOfLimit);
      //console.log(secondPart2);
      firstPart = `${firstPart2}1${secondPart2}`;
    }
    searchString = firstPart;
    searchString += inputRef.current.value;
    if (orderAsc) {
      const indexOfsortAsc = URL.indexOf(sortAsc);
      const secondPart = URL.slice(indexOfsortAsc);
      searchString += secondPart;
    }
    dispatch({ type: "urlChange", currentUrl: searchString });
  }

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        border: "1px solid black",
      }}
    >
      <div style={{ flex: 3 }}>
        <label htmlFor="searchString">Search by Last Name</label>
        <input type="text" id="searchString" ref={inputRef}></input>
        <button onClick={onButtonClick}>Search!</button>
      </div>
      <div style={{ flex: 1 }}>
        <label htmlFor="lastnameOrder">Order by Last Name (A to Z)</label>
        <input
          id="lastnameOrder"
          type="checkbox"
          checked={orderAsc}
          onChange={(e) => {
            let orderURL;
            if (e.target.checked) {
              orderURL = `${URL}${sortAsc}`;
              dispatch({ type: "urlChange", currentUrl: orderURL });
            } else {
              const indexOfsortAsc = URL.indexOf(sortAsc);
              orderURL = URL.slice(0, indexOfsortAsc);
              dispatch({ type: "urlChange", currentUrl: orderURL });
            }
            setOrderAsc(e.target.checked);
          }}
        ></input>
      </div>
    </div>
  );
}

/*
      <div style={{ flex: 3 }}>
        <label htmlFor="searchString">Search by Last Name</label>
        <input
          style={{ width: "75%" }}
          id="searchString"
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        ></input>
      </div>
      */
