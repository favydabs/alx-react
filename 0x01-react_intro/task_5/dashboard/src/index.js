import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import Notification from "./Notifications/Notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Notification />
    <App />
  </React.StrictMode>
);
