import React from 'react'
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Menu from "./components/Menu"
import { Route, Routes } from 'react-router-dom';
import UserSignin from './components/account/UserSignin';
import {useState} from 'react'

function App() {

  const [user, setUser] = useState(null)

  return (
    <><NavBar />
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/usersignin" element={ <UserSignin user={ user } setUser={ setUser }/> }/>
        <Route path="/cart" element={ <Cart /> }/>        
        <Route path="/menu" element={ <Menu /> }/>
      </Routes>
    </div>
    </>
  );
}

export default App;