import logo from './logo.svg';
import './App.css';
import Scoreboard from './modules/Scoreboard/index.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          SFVI info page2
        </a>
      </header>
      <Scoreboard/>
      
    </div>
  );
}

export default App;
