import logo from './logo.jpg';
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
      </main>
      <footer className="App-footer">0
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
