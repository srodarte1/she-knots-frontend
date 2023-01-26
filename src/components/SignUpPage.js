import { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useNavigate } from 'react-router-dom';

const Signup = ({setUser, setMessage, setToggleAuth}) => {
    const [user, setUserObj] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const navigateHome = useNavigate()

    const handleChange = ({target: {name, value}}) => {
        setUserObj(currentUser => ({
            ...currentUser,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        return navigateHome("/")
    }

  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign up to continue.</Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                // html input attribute
                required="true"
                name="username"
                type="username"
                placeholder="johndoe"
                onChange={handleChange}
                value={user.username}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                // html input attribute
                required="true"
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                onChange={handleChange}
                value={user.email}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                // html input attribute
                required="true"
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
                value={user.password}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password Confirmation</FormLabel>
                <Input
                // html input attribute
                required="true"
                name="password_confirmation"
                type="password"
                placeholder="password"
                onChange={handleChange}
                value={user.password_confirmation}
                />
            </FormControl>

            <Button type="submit" onSubmit={handleSubmit} sx={{ mt: 1 /* margin top */ }}>Sign Up</Button>
            </form>
          <Typography
            endDecorator={<Link href="/LoginPage" onClick={() => setToggleAuth(currentVal => !currentVal)}>Sign in</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

export default Signup;