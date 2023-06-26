import React from "react";
import Nav from "./components/layout/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
     
      <Outlet/>
    </div>
  );
}

export default App;
