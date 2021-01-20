import React from "react";
import "./App.scss";

import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
