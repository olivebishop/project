import React from 'react'
import DashboardHeader from '.././dashboard/DashboardHeader'
import '../../.././src/components/home/mainpage/css/dashboard.css';
import Sidebar from './Sidebar';
import { Grid } from '@mui/material';
function Dashboard(props) {
  const isLoggedIn = props.loginStatus.isLoggedIn;
  const setIsLoggedIn = props.loginStatus.setIsLoggedIn;
  return (
    <>
        <DashboardHeader loginStatus={{ isLoggedIn, setIsLoggedIn }}/>
        <Grid container sx={{mt: 50}}>
          <Grid item xs={4}>Sidebar</Grid>
          <Grid item xs={8}>Main Content</Grid>
        </Grid>
    </>
  )
}

export default Dashboard