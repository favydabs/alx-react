import Holberton from "./Holberton Logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={Holberton} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label typeof="email">email</label>
        <input type="email" id="enter email" />
        <label typeof="password">password</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>

      <div className="App-footer">
        <p>Current year: {getFullYear()}</p>
        <p>Footer Copy: {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
