import { Button, Card, CardContent, Link, TextField, Avatar } from '@mui/material';
import './Login.css';
import { Link as RouterLink, Navigate, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/api/v1/login', {username: username, password: password});
      console.log(`The status is: ${response.status}`);
      navigate('/dashboard');
    } catch (error) {
      toast("Username and password are incorrect");
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
              className="text pass"
              id="standard-basic"
              label="Password"
              type="password"
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
      <ToastContainer autoClose={30000} />
    </div>
  );
}

export default Login;
