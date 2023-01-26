import { Link } from "react-router-dom"

const Account = () => {
    return(
        <>
        <div className="form-container">
            <form>
                <h3>Welcome!</h3>
                <input type="text" placeholder="Enter your email" required/> <br/>
                <input type="text" placeholder="Enter your password" required/> <br/>
                <label>
                    <input type="checkbox"/> Remember me
                </label> <br/>
                <Link>Forgot password</Link> <br/>
                <button>Sign In</button>
                <br/>
                <button>Sign In With Google</button> <br/>
                <Link>Sign Up</Link>
                
            </form>
        </div>
       
        </>
    )
}

export default Account