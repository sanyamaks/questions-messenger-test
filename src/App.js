import React from "react";
import "./App.scss";
import Store from "./store/Store";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <Store>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </Store>
  );
};

export default App;
