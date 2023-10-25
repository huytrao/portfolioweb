import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
function expandElement() {
  const element = document.getElementById('yourElementId');
  element.classList.toggle('hidden-part');
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
