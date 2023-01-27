import Link from '@mui/joy/Link';
import { useState, useEffect } from "react"

const UserHomepage = ({user, setUser}) => {
    console.log(user.email)

    const [showForm, setShowForm] = useState(false);
    const [currentUser, setCurrentUser] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch("http://localhost:9292/users")
            const data = await resp.json()
            setCurrentUser(currentUser)
            console.log(data)
          } catch (error) {
            alert(error)
          }
      }
      fetchData()
      }, []);



    return (
    <>
        <h1>She Knots</h1>
        <div>
           
            <img className="user-logo" src="https://iili.io/H0j4Y0l.png" alt="user"/>
            <h2> My Account </h2>
            <h3>
            {user.email}
            </h3>
            <br/>
            
            <Link>Manage Account</Link> <br/>
            
            <form>
            <input className="user-input"  type="text" placeholder="First Name" name="first-name"  required /> <br />
            <input className="user-input"  type="text" placeholder="Last" name="first-name"  required /> <br />
            <input className="user-input"  type="text" placeholder="Address" name="first-name"  required /> <br />
            <input className="user-input"  type="text" placeholder="Phone Number" name="first-name"  required /> <br />
            <button type="submit" >Update</button> <br/>
            <Link>Remove Account</Link>
            <br/>
            <button>Logout</button>
            </form>
        </div>

    </>
    )
}

export default UserHomepage