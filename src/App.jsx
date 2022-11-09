import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  const [page, setPage] = useState(0);
  function switchPage(id) {
    setPage(id);
  }
  useEffect(() => {}, [page]);
  function renderSwitch() {
    switch (page) {
      case 0:
        return <Home />;
      case 1:
        return <Destination />;
      case 2:
        return <Crew />;
      case 3:
        return <Technology />;
      default:
        return <Home />;
    }
  }
  return (
    <>
      <Nav handleClick={switchPage} />
      {renderSwitch()}
    </>
  );
}

export default App;
