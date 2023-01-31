import React, {useState} from 'react'
import './Header.css'
import logo from '../../../assets/logo.png';
import { AppBar,Tabs, Typography,Toolbar, Tab, Button,useMediaQuery,useTheme } from '@mui/material'
// import Icon from '@mui/material'
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';
/*--------------------------media queries----------*/
const Header = () => {
        const [value, setValue] = useState();
        const theme = useTheme();
        const isMatch = useMediaQuery(theme.breakpoints.down('md'));
        const isMatchLg = useMediaQuery(theme.breakpoints.up('lg'));
        
return (
        <React.Fragment>
        <AppBar sx={{background:'#063970'}}> 
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
                        <Tab label="Home" component={Link} to="/"/>
                        <Tab label="About" component={Link} to="/about"/>
                        <Tab label="Services" component={Link} to="/services"/>
                        <Tab label="Contact" component={Link} to="/contacts"/>
                </Tabs>
                        <Button sx={{marginLeft:'auto'}} variant='contained'component={Link} to="/login">Login</Button>
                        <Button sx={{marginLeft:'10px'}} variant='contained'component={Link} to="/sign up">Sign up</Button>
                        </>
                ) : (
                        /*-----tabs for md devices---*/
                                <>
                        <Tabs 
                textColor='inherit' value={value} onChange={(e,value)=>setValue(value) } indicatorColor='secondary'>
                        <Tab label="Home" component={Link} to="/"/>
                        <Tab label="About" component={Link} to="/about"/>
                        <Tab label="Services" component={Link} to="/services"/>
                        <Tab label="Contact" component={Link} to="/contacts"/>
                </Tabs>
                <Button sx={{marginLeft:'auto'}} variant='contained'component={Link} to="/login">Login</Button>
                        <Button sx={{marginLeft:'10px'}} variant='contained'component={Link} to="/signup">Sign up</Button>
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
