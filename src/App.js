import React from 'react'
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import LoginPage from "./components/LoginPage"
import Cart from "./components/Cart"
import Menu from "./components/Menu"
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';

function App() {

  

  return (
    <><NavBar />
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/LoginPage" element={ <LoginPage /> }/>
        <Route path="/Cart" element={ <Cart /> }/>        
        <Route path="/Menu" element={ <Menu /> }/>
        <Route path="/SignUpPage" element={ <SignUpPage /> }/>
      </Routes>
    </div>
    </>
  );
}

export default App;