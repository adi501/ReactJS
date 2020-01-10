import React from "react";
import ReactDOM from "react-dom";
import UrlExp from "./component/UrlExp";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <UrlExp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
