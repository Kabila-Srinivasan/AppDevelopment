import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const userEmail = useSelector((state) => state.user.email);
  const navigate = useNavigate();  
  console.log(userEmail);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  const handleourClick = () => {
    navigate('/our');
    toggleDrawer(false);
  };
  const handlemyClick = () => {
    navigate('/my');
    toggleDrawer(false);
  };
  const handlefaqClick = () => {
    navigate('/faq');
    toggleDrawer(false);
  };
  const handlefeedClick = () => {
    navigate('/feed');
    toggleDrawer(false);
  };
  const handletesClick = () => {
    navigate('/test');
    toggleDrawer(false);
  };
  const handlefollClick = () => {
    navigate('/follow');
    toggleDrawer(false);
  };
  const handledashClick = () => {
    navigate('/dash');
    toggleDrawer(false);
  };
  const handlelogClick = () => {
    navigate('/login');
    toggleDrawer(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Lucida Console' }}>
           <div className="welc1"> <centre>Home Appliance Service Centre</centre>
           </div>
          </Typography>
          {userEmail && (
            <Typography variant="body2" sx={{ marginRight: '10px' }}>
              Welcome Back, {userEmail.toString()} 
            </Typography>)}
          <Button color="inherit"><a href="/log">Login</a></Button>
          <Button color="inherit"><a href="/register">SignUp</a></Button>
          <Button color="inherit"><a href="/d">Dashboard</a></Button>
          <Button color="inherit"><a href="/about">About Us</a></Button>
          <Button color="inherit"><a href="/contact">Contact Us</a></Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px' }}>
          <List>
          <center>Welcome Back!
          </center>
         
            <ListItem button onClick={handlemyClick}>
              <ListItemText primary="My Service Centre" />
            </ListItem>
            <ListItem button onClick={handledashClick}>
              <ListItemText primary="Admin Dashboard" />
            </ListItem>
            <ListItem button onClick={handleourClick}>
              <ListItemText primary="Our Services" />
            </ListItem>
            <ListItem button onClick={handlelogClick}>
              <ListItemText primary="Admin Login" />
            </ListItem>
            <ListItem button onClick={handlefaqClick}>
              <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem button onClick={handletesClick}>
              <ListItemText primary="Testimonials" />
            </ListItem>
            <ListItem button onClick={handlefeedClick}>
              <ListItemText primary="Feedback" />
            </ListItem>
            <ListItem button onClick={handlefollClick}>
              <ListItemText primary="Follow Us" />
            </ListItem>
           
          </List>
        </div>
      </Drawer>
    </Box>
  );
}
