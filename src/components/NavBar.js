//Want to remove lower padding so that the NavBar is flush with the NavBar below it
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {
    
  

    return(
        <nav className='NavBar'>
            <Link to= "/" className="site-title">She Knots</Link>
            <ul>
                <CustomLink to="/Menu">Menu</CustomLink>
                <CustomLink to="/Account">Account</CustomLink>
                <CustomLink to="/Cart">Cart</CustomLink>
            </ul>

            {/* <a className="menuButton" onClick={handleLinkClick} href="/Menu">Menu</a>
            <a className="homePageButton" onClick={handleLinkClick} href="/HomeLogo">HomeLogo</a>
            <a className="searchButton" onClick={handleLinkClick} href="/Search">Search</a>
            <a className="accountButton" onClick={handleLinkClick} href="/Account">Account</a>
            <a className="cartButton" onClick={handleLinkClick} href="/Cart">Cart</a> */}
        </nav>
    )
}

export default NavBar

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
      <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
        </Link>
      </li>
    )
  }