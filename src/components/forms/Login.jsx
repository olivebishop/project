import { Button, Card, CardContent, Link, TextField, Avatar } from '@mui/material';
import './Login.css';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async (e) => {
    e.preventDefault();

    try {
      // Fetch user from API by email or username
      const response = await axios.get(`http://localhost:5000/users?email=${email}&username=${username}`);

      if (response.data.length === 0) {
        toast.error('Invalid email/username!');
        return;
      }

      const user = response.data[0];

      // Check if password is correct
      if (user.password !== password) {
        toast.error('Invalid password!');
        return;
      }

      toast.success('Signed in successfully!', {
        position: 'bottom-center',
      });

      // TODO: Set user session or redirect to dashboard
    } catch (error) {
      console.log(error);
      toast.error('Sign in failed!');
    }
  };

  return (
    <div className="signin">
      <Card className="card">
        <Avatar sx={{ margin: '2px 0px' }} />
        <h1>Sign In</h1>
        <CardContent>
          <div>
            <TextField
              className="text"
              id="standard-basic"
              label="Username"
              variant="standard"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div>
            <TextField
              className="text"
              id="standard-basic"
              label="Email"
              variant="standard"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              className="text pass"
              id="standard-basic"
              label="Password"
              variant="standard"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button variant="outlined" className="btn" onClick={signin}>
            Login
          </Button>
          <div>
            <h6>
              No Account?
              <Link component={RouterLink} to="/signup">
                Sign up here
              </Link>
            </h6>
          </div>
        </CardContent>
      </Card>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default Login;
