import "./App.css";

import { Outlet } from "react-router";

import Paint from "./Pages/Paint/Index";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
