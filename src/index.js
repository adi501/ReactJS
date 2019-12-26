import React from "react";
import ReactDOM from "react-dom";
import FormControlledComponent from "./component/FormControlledComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <FormControlledComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
