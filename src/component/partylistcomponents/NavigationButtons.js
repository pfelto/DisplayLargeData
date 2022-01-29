import React from "react";

export default function NavigationButtons() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "1vh",
      }}
    >
      <button>Back</button>
      <button>Forward</button>
    </div>
  );
}
