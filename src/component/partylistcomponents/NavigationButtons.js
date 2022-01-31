import React from "react";
import { paginate } from "../../utils/fetchApi";

export default function NavigationButtons({ URL, dispatch }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "1vh",
      }}
    >
      <div>
        <button onClick={() => paginate("first", URL, dispatch)}>First</button>
        <button onClick={() => paginate("prev", URL, dispatch)}>Prev</button>
      </div>
      <div>
        <button onClick={() => paginate("next", URL, dispatch)}>Next</button>
        <button onClick={() => paginate("last", URL, dispatch)}>Last</button>
      </div>
    </div>
  );
}
