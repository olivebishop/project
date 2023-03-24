import React, {useEffect, useState} from 'react'
import logo from '../../assets/logo.png';
import { AppBar,Tabs, Typography,Toolbar, Tab, Button,useMediaQuery,useTheme } from '@mui/material';
import '../../.././src/components/home/mainpage/css/dashboard.css';
import { useNavigate } from 'react-router-dom';
// import Icon from '@mui/material'
import DrawerComp from '../../.././src/components/home/header/DrawerComp';
import { Link } from 'react-router-dom';
/*--------------------------media queries----------*/




const Header = (props) => {
        const [value, setValue] = useState();
        const theme = useTheme();
        const isMatch = useMediaQuery(theme.breakpoints.down('md'));
        const isMatchLg = useMediaQuery(theme.breakpoints.up('lg'));
        const [isLoggedOut, setIsLoggedOut] = useState(true);
        const [authToken, setAuthToken] = useState(false);
        const navigate = useNavigate();

        const setIsLoggedIn = props.loginStatus.setIsLoggedIn;


        useEffect(() => {
                const token = localStorage.getItem('authToken');
                setAuthToken(token);
                if(!token) {
                        navigate('/login');
                }
                setIsLoggedIn(true);
        }, [setAuthToken, navigate, setIsLoggedIn])

        const handleLogout = async () => {
            // perform logout logic
            localStorage.removeItem("authToken");
            navigate("/login");
            setIsLoggedIn(false);
            setIsLoggedOut(false);
          };
       
      //elevation is shadow in appbar and 5 its teh unit
return (
        <React.Fragment>
        <AppBar sx={{background:'#063970', mt:0}}  position='fixed'> 
                <Toolbar> 
                        {
                        isMatch ? (
                <>
                <Typography>
                <img className='img-logo' src={logo} alt=""/>
                </Typography> 
                <DrawerComp/>
                </> 
                ) :(
                        /*---------large screen queries and tabs------------------------------------*/
                isMatchLg ? (
                <>
                        <Typography>
                        <img className='img-logo' src={logo} alt=""/>
                        </Typography>
                        <Tabs sx={{marginLeft:'auto'}}
                textColor='inherit' value={value} onChange={(e,value)=>setValue(value) } indicatorColor='secondary'>
                        {
                                
                        }
                        <Tab label="Users" component={Link} to="/"/>
                        <Tab label="Countries" component={Link} to="/about"/>
                        <Tab label="Jobs" component={Link} to="/services"/>
                        <Tab label="Help" component={Link} to="/contact"/>
                      
                        
                </Tabs> 
                <Button sx={{ marginLeft: "auto" }}  variant="contained"  onClick={handleLogout}>Logout</Button>
                    
                        </>
                ) : (
                        /*-----tabs for md devices---*/
                                <>
                        <Tabs 
                textColor='inherit' value={value} onChange={(e,value)=>setValue(value) } indicatorColor='secondary'>
                        {
                                
                        }
                         <Tab label="Users" component={Link} to="/"/>
                        <Tab label="Countries" component={Link} to="/about"/>
                        <Tab label="Jobs" component={Link} to="/services"/>
                        <Tab label="Help" component={Link} to="/contact"/>
                </Tabs> 
                <Button sx={{ marginLeft: "auto" }}  variant="contained"  onClick={handleLogout}>Logout</Button>
                    
                        </>
                )
                )             
                        }
                </Toolbar>
                </AppBar>
        </React.Fragment>
        

)
}

export default Header;
