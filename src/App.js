import { PartyList } from "./component/PartyList";

function App() {
  //console.log(isNarrow);
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "100vw",
        minHeight: "100vh",
        maxWidth: "100%",
        padding: "2vh 5vw",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, minmax(min-content, 1fr))",
          backgroundColor: "lavender",
          borderRadius: "10px",
          padding: "1%",
        }}
      >
        <h1 style={{ textAlign: "center", margin: 0, paddingBottom: "1vh" }}>
          Pablo and Mya's Wedding Party
        </h1>
        <PartyList />
      </div>
    </div>
  );
}

export default App;
