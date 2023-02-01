import { Button, Card, CardContent, Link, TextField } from '@mui/material';
import './Signup.css';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'

function Signup() {
  return (
    <div className='signup'>
      <Card className='card'>
        <h1>Sign Up</h1>
        <CardContent>
          <div>
            <TextField className='text' id="standard-basic" label='Fullname' variant='standard'></TextField>
            <TextField className='text' id="standard-basic" label='Username' variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text' id="standard-basic" label='Email' variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text pass' id="standard-basic" label='Password' variant='standard'></TextField>
          </div>
          <div>
            <TextField className='text pass' id="standard-basic" label='Confirm Password' variant='standard'></TextField>
          </div>
          <Button variant='outlined' className='btn'>Register</Button>
          <div>          
          <h6>Have an account?<Link component={RouterLink} to='/login'>Login here</Link></h6>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signup;