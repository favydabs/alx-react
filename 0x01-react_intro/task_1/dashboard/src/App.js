import holberton from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy} from "./utils"
import "./App.css";

function App() {
  return (
    <div>
        <div className="App-header">
          <img src={holberton}  alt="Holberton Logo" />
          <h1>School dashboard</h1>
        </div>

        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>

        <div className="App-footer">
      <p>Current year: {getFullYear()}</p>
      <p>Footer Copy: {getFooterCopy(true)}</p>
    </div>
    </div>
  );
}



export default App;
