import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import '../../.././src/components/home/mainpage/css/dashboard.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import EmailIcon from '@mui/icons-material/Email';
/*--------------------------media queries----------*/

const Header = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [authToken, setAuthToken] = useState(false);
  const navigate = useNavigate();

  const setIsLoggedIn = props.loginStatus.setIsLoggedIn;

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
    if (!token) {
      navigate('/login');
    }
    setIsLoggedIn(true);
  }, [setAuthToken, navigate, setIsLoggedIn]);

  const handleLogout = async () => {
    // perform logout logic
    localStorage.removeItem('authToken');
    navigate('/login');
    setIsLoggedIn(false);
    setIsLoggedOut(false);
  };

  //elevation is shadow in appbar and 5 its the unit
  return (
    <React.Fragment>
      <AppBar sx={{ background: '#063970', mt: 0 }} position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            {isMatch ? (
              <>
                <IconButton>
                  <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
                <Typography>
                  <img className="img-logo" src={logo} alt="" />
                </Typography>
              </>
            ) : (
              <Typography>
                <img className="img-logo" src={logo} alt="" />
              </Typography>
            )}
          </div>
          <div className="search-container" sx={{ display: 'flex', alignItems: 'center' }}>
            <input sx={{ width: '100%', background: 'transparent', color: 'white', border: 'none', fontSize: '16px' }} placeholder="Search" />
            <IconButton sx={{ color: 'white' }}>
              <SearchIcon />
            </IconButton>
          </div>
          <div className="header-icons">
            <IconButton sx={{ color: 'white' }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
            <EmailIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <PowerSettingsNewIcon onClick={handleLogout} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
