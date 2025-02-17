import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Drawer, List, ListItem, ListItemText, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/joy';
import Link from 'next/link';

const LoggedOutHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile screen size

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const drawerItems = (
    <List>
      <ListItem button>
        <Link style={{ textDecoration: 'none', color: 'black' }} href="/login">
          <Button variant={'solid'} sx={{ marginLeft: '10px', minWidth: '100px' }}>
            Log In
          </Button>
        </Link>
      </ListItem>
      <hr style={{opacity: 0.3}} /> 
      <ListItem button>
        <Link style={{ textDecoration: 'none', color: 'black', width: '100%' }} href="/feed">
          <ListItemText primary="Feed" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link style={{ textDecoration: 'none', color: 'black', width: '100%' }} href="/pages/about-us">
          <ListItemText primary="About us" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link style={{ textDecoration: 'none', color: 'black', width: '100%' }} href="/pages/contact-us">
          <ListItemText primary="Contact us" />
        </Link>
      </ListItem>

    </List>
  );

  return (
    <AppBar position="sticky" color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo on the left */}
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          <Link href='/feed'>
            <img src="/site-assets/logo.png" width={'200'} height={'auto'} />
          </Link>
        </Typography>

        {/* Only show menu items in the center for larger screens */}
        {!isMobile && (
          <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link style={{ textDecoration: 'none', color: 'black' }} href={'/feed'}>
              <Button variant='plain' sx={{ margin: '0 10px' }}>
                Feed
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} href={'/pages/about-us'}>
              <Button variant='plain' sx={{ margin: '0 10px' }}>
                About Us
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} href={'/pages/contact-us'}>
              <Button variant='plain' sx={{ margin: '0 10px' }}>
                Contact Us
              </Button>
            </Link>

            {/* Log In Button wrapped in Link */}
            <Link style={{ textDecoration: 'none', color: 'black' }} href="/login">
              <Button variant={'solid'} sx={{ marginLeft: '10px', minWidth: '100px' }}>
                Log In
              </Button>
            </Link>
          </Container>
        )}

        {/* Hamburger menu for mobile */}
        {isMobile && (
          <IconButton
            color="inherit"
            onClick={() => toggleDrawer(true)}
            edge="end"
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for mobile menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        {drawerItems}
      </Drawer>
    </AppBar>
  );
};

export default LoggedOutHeader;
