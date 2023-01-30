import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { useState } from 'react'
import UserHomepage from './UserHomepage'

const UserSignin = ({user, setUser, setMessage}) => {
    const [toggleAuth, setToggleAuth] = useState(false)
    const [toggleLogout, setLogout] = useState(false)

    if (!user) {
        return (toggleAuth && <LoginPage setMessage={setMessage} setUser={setUser} setToggleAuth={setToggleAuth} />)||(<SignUpPage setMessage={setMessage} setUser={setUser} setToggleAuth={setToggleAuth} />)
    }
    console.log("This is user in Usersignin" + user)
    return(
        <div>
            <UserHomepage user={user} setUser={setUser}/>
        </div>
    )
}

export default UserSignin
