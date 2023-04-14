import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full lg:w-3/4 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
