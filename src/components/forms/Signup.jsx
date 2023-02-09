import { Avatar, Button, Card, CardContent, Link, TextField } from '@mui/material';
import './Signup.css';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';



function Signup() {
  const [Username,setUsername]= useState('');
  const [Fullname,setFullname]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    // console.log(`${username}  ${email}  ${password}`);
    const user = {
      fullname: Fullname,
      username: Username,
      email: email,
      password: password
    }
    try {
      const response = await axios.post('http://localhost:5000/users', user);
      setSignupSuccess(true);
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='signup'>
      <Card className='card'>
       <Avatar sx={{margin:'2px 0px'}}></Avatar> 
        <h1>Sign Up</h1>
        <CardContent>
        {signupSuccess && (
            <div className='signup-success'>
              Signed up successfully!
            </div>
          )}
          <div>
            <TextField className='text' id="standard-basic" label='Fullname'
             value={Fullname} onChange={e => setFullname(e.target.value)} type="text"
             defaultValue="Username"
             variant='standard'></TextField>

            <TextField className='text' id="standard-basic" label='Username' 
              value={Username} onChange={e => setUsername(e.target.value)} type="text"
              defaultValue="Username"
    
            variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text' id="standard-basic" label='Email'
               value={email}onChange={e => setEmail(e.target.value)} type="text"
               defaultValue="Email"
     
             variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text pass' id="standard-basic" label='Password'
            value={password} onChange={e => setPassword(e.target.value)} type="password"
            autoComplete="current-password"
            variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text pass' id="standard-basic" label='Confirm Password' variant='standard'></TextField>
          </div>
          <Button variant='outlined' className='btn' onClick={signup}>Register</Button>
          <div>          
          <h6>Have an account?<Link component={RouterLink} to='/login'>Login here</Link></h6>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signup;