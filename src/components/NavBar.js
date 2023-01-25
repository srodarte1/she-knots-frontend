//Want to remove lower padding so that the NavBar is flush with the NavBar below it

const NavBar = ({ onChangePage }) => {
    
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }

    return(
        <nav className='NavBar' onClick={handleLinkClick} href="/">
            <a className="menuButton" onClick={handleLinkClick} href="/Menu">Menu</a>
            <a className="homePageButton" onClick={handleLinkClick} href="/HomeLogo">HomeLogo</a>
            <a className="searchButton" onClick={handleLinkClick} href="/Search">Search</a>
            <a className="accountButton" onClick={handleLinkClick} href="/Account">Account</a>
            <a className="cartButton" onClick={handleLinkClick} href="/Cart">Cart</a>
        </nav>
    )
}

export default NavBar