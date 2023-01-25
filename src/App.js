// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Announcement from "./components/Announcement"
import HomeBanner from './components/HomeBanner';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> }/>

      </Routes>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit the <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}