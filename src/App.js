import { PartyList } from "./component/PartyList";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const isNarrow = useMediaQuery("(max-height: 900px)");
  //console.log(isNarrow);
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "100vw",
        height: !isNarrow ? "100vh" : "100%",
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
