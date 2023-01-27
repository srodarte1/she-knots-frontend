//Want to remove lower padding so that the NavBar is flush with the NavBar below it
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {
    
  

    return(
        <nav className='nav-bar'>
            <Link  to= "/" className="knot-links">She Knots</Link>
            <ul className="menuItems">
                <CustomLink className="links" to="/Menu">Menu</CustomLink>
                <CustomLink className="links" to="/usersignin">Login</CustomLink>
                <CustomLink className="links" to="/Cart">Cart</CustomLink>
                {/* add a login or out button conditional to whether a user is signed in or out */}
            </ul>
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