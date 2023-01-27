import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { useState } from 'react'
import UserHomepage from './UserHomepage'

const UserSignin = ({user, setUser}) => {
    const [toggleAuth, setToggleAuth] = useState(false)

    if (!user) {
        return (toggleAuth && <LoginPage setUser={setUser} setToggleAuth={setToggleAuth} />)||(<SignUpPage setUser={setUser} setToggleAuth={setToggleAuth} />)
    }

    return(
        <div>
            <UserHomepage user={user} setUser={setUser}/>
        </div>
    )
}

export default UserSignin