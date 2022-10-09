import React from 'react';
import './Navbar.scss';
// import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Link } from '@mui/material';
import RocketIcon from '@mui/icons-material/Rocket';

const url = 'https://clever-dasik-399063.netlify.app/';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: '#282828'}}>
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
             <Link href="/" color="inherit">
                <RocketIcon />  
             </Link>               
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Space App
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit" href={url + `stars`}>Learning with Nasa</Button>
                <Button color="inherit" href="#cataclysmic">Cataclysmic Variables</Button>
                <Button color="inherit" href="#cepheids">Cepheids</Button>
                <Button color="inherit" href="#lightcurves">Light Curves</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar