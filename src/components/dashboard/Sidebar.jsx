import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  return (
    <List sx={{ bgcolor: '#000000', position: 'relative', height: '100%',
    '@media (max-width: 600px)': {
        position: 'fixed',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        bgcolor: '#FFFFFF',
        transition: 'all 0.3s ease-in-out',
      },
      '@media (min-width: 600px)': {
        width: '240px',
      }
    
    }}>
      <ListItem button>
        <ListItemIcon sx={{ color: 'white' }}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{ color: 'white' }}>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{ color: 'white' }}>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{ color: 'white' }}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItem>
      <ListItem button sx={{ position: 'absolute', bottom: 0 }}>
        <ListItemIcon sx={{ color: 'white' }}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button sx={{ mb: 2 }}>
        <ListItemIcon sx={{ color: 'white' }}>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
