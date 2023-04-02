import React from 'react';
import DashboardHeader from '.././dashboard/DashboardHeader';
import '../../.././src/components/home/mainpage/css/dashboard.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Grid } from '@mui/material';
import './css/sidebar.css'

function Dashboard(props) {
  const isLoggedIn = props.loginStatus.isLoggedIn;
  const setIsLoggedIn = props.loginStatus.setIsLoggedIn;
  return (
    <>
      <DashboardHeader loginStatus={{ isLoggedIn, setIsLoggedIn }} />
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <Grid container sx={{ mt: 50 }}>
        <Grid item xs={12} md={8}>
          <MainContent />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
