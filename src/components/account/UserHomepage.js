import Link from '@mui/joy/Link';
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const UserHomepage = ({user, setUser}) => {
    console.log(user.email)
    console.log ("this is setUser in userhomepage" + setUser)

    const [showForm, setShowForm] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(user)
    const navigate = useState()
    console.log(user)
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUpdatedUser({...updatedUser, [name]: value})
        console.log(e)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
          })
          .then((response) => {
            if (response.status === 200) {
                
                response.json()
                .then((updatedUserObj) => {
                    setUser(updatedUserObj.user)
            })
        } else {
            response.json()
                .then((messageObj) => {
                    alert(messageObj.message)
            })
        }
    
    })
}

    const handleDelete = (e) => {
    e.preventDefault()
   fetch(`http://localhost:9292/users/${user.id}`, {method: "DELETE"})
    .then(() => setUser(null))
    
    
  }
  

    return (
    <>
        <h1>She Knots</h1>
        <div>
           
            <img className="user-logo" src="https://iili.io/H0j4Y0l.png" alt="user"/>
            <h2> My Account </h2>
            <h3>
            {user.email}
            <br/>
            {user.first_name} 
            </h3>
            <br/>
            
            <Link>Manage Account</Link> <br/>
            
            <form onSubmit={handleSubmit}>
            <input className="user-input" onChange= {handleChange} value= {updatedUser.first_name} type="text" placeholder="First Name" name="first_name"  required /> <br />
            <input className="user-input" onChange= {handleChange} value= {updatedUser.last_name} type="text" placeholder="Last" name="last_name"  required /> <br />
            <input className="user-input" onChange= {handleChange} value= {updatedUser.address} type="text" placeholder="Address" name="address"  required /> <br />
            <input className="user-input" onChange= {handleChange} value= {updatedUser.phone_number} type="text" placeholder="Phone Number" name="phone_number"  required /> <br />
            <button type="submit" >Update</button> <br/>
            <button onClick={handleDelete}>Remove Account</button>
            <br/>
            <button>Logout</button>
            </form>
        </div>

    </>
    )
}

export default UserHomepage