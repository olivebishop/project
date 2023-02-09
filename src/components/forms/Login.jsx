import { Button, Card, CardContent, Link, TextField, Avatar } from '@mui/material';
import './Login.css';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'

function Login() {
  return (
    <div className='signin'>
      <Card className='card'>
      <Avatar sx={{margin:'2px 0px'}}></Avatar> 
        <h1>Sign In</h1>
        <CardContent>
          <div>
            <TextField className='text' id="standard-basic" label='Username' variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text' id="standard-basic" label='Email' variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text pass' id="standard-basic" label='Password' variant='standard'></TextField>
          </div>
          
          <Button variant='outlined' className='btn'>Login</Button>
          <div>          
          <h6>No Account?<Link component={RouterLink} to='/signup'>Sign up here</Link></h6>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login;