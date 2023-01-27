//Want to remove lower padding so that the NavBar is flush with the NavBar below it
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {
    
  

    return(
        <nav className='NavBar'>
            <Link to= "/" className="site-title">She Knots</Link>
            <ul>
                <CustomLink to="/Menu">Menu</CustomLink>
                <CustomLink to="/usersignin">Login</CustomLink>
                <CustomLink to="/Cart">Cart</CustomLink>
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