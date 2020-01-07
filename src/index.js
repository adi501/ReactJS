import React from "react";
import ReactDOM from "react-dom";
import DynamicDropdownList from "./component/DynamicDropdownList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <DynamicDropdownList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
