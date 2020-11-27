import "./App.css";
import Search from "./SeachBar/Search";

function App() {
  return (
    <div className="App" style={{ display: "grid", columnNumber: 3 }}>
      <h1>Search Bar</h1>
      <Search />
    </div>
  );
}

export default App;
