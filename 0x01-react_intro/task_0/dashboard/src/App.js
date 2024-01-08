import Holberton from "./Holberton Logo.jpg";
import "./App.css";

function App() {
  return (
    <div>
        <div className="div-header">
          <img src={Holberton}  alt="Holberton Logo" className="App-header"/>
          <h1>School dashboard</h1>
        </div>

        <div>
          <p className="App-body">Login to access the full dashboard</p>
        </div>

        <div className="div-footer" >
          <p className="App-footer"> Copyright 2020 - holberton School </p>
        </div>
</div>
  );
}

export default App;
