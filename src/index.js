import React from "react";
import ReactDOM from "react-dom";
import RouterEXP1 from "./component/RouterEXP1";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <RouterEXP1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
