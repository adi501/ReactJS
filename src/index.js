import React from "react";
import ReactDOM from "react-dom";
import ReactEvents from "./component/ReactEvents";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ReactEvents />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
