import React from "react";
import ReactDOM from "react-dom";
import AxiosLoadingErrorHandling from "./component/AxiosLoadingErrorHandling";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AxiosLoadingErrorHandling />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
