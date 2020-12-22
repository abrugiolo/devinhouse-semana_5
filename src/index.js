import React from "react";
import ReactDOM from "react-dom";
import Principal from "./pages/principal";
import { criarServidor } from "./services/mirageServer";

// "development" || "test" || "production"
const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  criarServidor({ enviroment: ambiente });
}

ReactDOM.render(
  <React.StrictMode>
    <Principal />
  </React.StrictMode>,
  document.getElementById("root")
);
