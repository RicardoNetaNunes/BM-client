import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import '../App.css';

function ButtonAppBar(props) {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="myNav">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <img alt="logo" src="/logo2.jpg"/>
          </Typography>
          <Button color="inherit">Auctions</Button>
          {
            props.user ? (
              <>
              <Button href="/user" color="inherit">Profile</Button>
              <Button onClick={props.onLogout} color="inherit">Logout</Button>
              </>        
            ) : (
          <>
          <Button className="myBtn" onClick={props.openSI} color="inherit">Log in</Button>
          <Button onClick={props.open} color="inherit">Sign up</Button>
          </>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;