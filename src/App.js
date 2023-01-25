import React from 'react'
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Account from "./components/Account"
import Cart from "./components/Cart"
import Menu from "./components/Menu"
import { Route, Routes } from 'react-router-dom';

function App() {

// const [products, setProducts] = useState([])



// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const r = await fetch("http://localhost:9292/products")
//       const data = await r.json()
//       setProducts(data)
//     } catch (e) {
//       alert(e)
//     }
//   }
//   fetchData()
//   }, [])
 
  
  
  return (
    <><NavBar />
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/Account" element={ <Account /> }/>
        <Route path="/Cart" element={ <Cart /> }/>        
        <Route path="/Menu" element={ <Menu /> }/>
      </Routes>
    </div>
    </>
  );
}

export default App;