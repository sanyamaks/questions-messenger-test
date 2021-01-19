import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
