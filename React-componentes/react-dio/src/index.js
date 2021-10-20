import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  //render recebe dois paramentro, quem vai ser renderizado e onde vai ser renderizado
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //vai ser renderizado nesse root
);
