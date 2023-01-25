import { Link } from "react-router-dom";

//Want to remove lower padding so that the NavBar is flush with the NavBar below it

const NavBar = () => {
    return(
        <div className='NavBar'>
            <button className="menuButton">Menu</button>
            <button className="homePageButton">HomeLogo</button>
            <button className="searchButton">Search</button>
            <button className="accountButton">Account</button>
            <button className="cartButton">Cart</button>
        </div>
    )
}

export default NavBar