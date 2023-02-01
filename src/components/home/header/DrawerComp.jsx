import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const PAGES = ["Home", "About", "Services", "Contact", "Login", "Sign up"];

const DrawerComp = () => {
  const [OpenDrawer, setOpenDrawer] = useState(false);
  
  return (
    <React.Fragment>
      <Drawer open={OpenDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {
            PAGES.map((page, index) => (
              <Link key={index} to={`/${page.toLowerCase()}`} onClick={() => setOpenDrawer(false)}>
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText>
                      {page}
                    </ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            ))
          }
        </List>
      </Drawer>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!OpenDrawer)}>
        <MenuIcon sx={{ color: 'white' }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
