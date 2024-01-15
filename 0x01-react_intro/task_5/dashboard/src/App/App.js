import React from "react";
import holberton from "../assets/holberton-logo.jpg";
import Notification from "../Notifications/Notifications";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./App.css";

function App() {
  return (
    <div>
      <Notification />
      <div className="div-header">
        <img src={holberton} alt="Holberton Logo" className="App-header" />
        <h1>School dashboard</h1>
      </div>

      <div className="div-body">
        <p className="App-body">Login to access the full dashboard</p>
        <label typeof="email">Email:</label>
        <input type="email" id="enter email" />
        <label typeof="password">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>

      <div className="div-footer">
        <p className="App-footer">
          Current year: {getFullYear()}-{getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
