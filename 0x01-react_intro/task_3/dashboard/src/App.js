import logo from './logo.jpg';
import {getFullYear, getFooterCopy} from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="holberton logo"></img>
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"/>
          <button>OK</button>
        </form>
      </main>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
