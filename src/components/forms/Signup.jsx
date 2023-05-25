import { Button, Card, CardContent, Link, TextField, Avatar } from '@mui/material';
import './Signup.css';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function SignUp() {

  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 

  const validateForm = () => {
    let isValid = true;
    if (!fullname.trim()) {
      toast.error('Please enter your full name.');
      isValid = false;
    }
    if (!username.trim()) {
      toast.error('Please enter a username.');
      isValid = false;
    }
    if (!email.trim() || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      isValid = false;
    }
    if (!password.trim()) {
      toast.error('Please enter a password.');
      isValid = false;
    } else if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      isValid = false;
    }
    return isValid;
  };

  const signup = async (e) => {
    e.preventDefault();
    console.log("Test signup");
    if (!validateForm()) {
      return;
    }
    const user = {
      fullname: fullname,
      username: username,
      email: email,
      password: password
    };
    try {
      const response = await axios.post('https://second-cuboid-pick.glitch.me/api/v1/signup', user);
      console.log(`${fullname} ${username} ${email} ${password}`);
      toast.success('Signed up successfully!', {
        position: 'bottom-center',
      });
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error('Sign up failed!');
    }
  }

  return (
    <div className="signup">
      <Card className="card">
        <Avatar sx={{ margin: '1px 0px' }} />
        <h1>Sign Up</h1>
        <CardContent>
          <div>
            <TextField
              className="text"
              id="standard-basic"
              label="Fullname"
              variant="standard"
              value={fullname}
              onChange={e => setFullname(e.target.value)}
            />
          </div>
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
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <TextField
              className="text pass"
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button variant="outlined" className="btn" onClick={signup}>
            Sign Up
          </Button>
          <div>
            <h6>
              Already have an account?
              <Link component={RouterLink} to="/login">
                Sign in here
              </Link>
            </h6>
          </div>
        </CardContent>
      </Card>
     <ToastContainer autoClose={3000} />

    </div>
  );
}

export default SignUp;
