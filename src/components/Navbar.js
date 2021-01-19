import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Typography,
  makeStyles,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";

const useStyles = makeStyles({
  menuLink: {
    color: "#fff",
  },
  highlighted: {
    borderBottom: "3px solid #fff !important",
  },
});

const NavBar = ({ user, signIn, signOut }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    console.log('handle menu');
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      console.log('handle close');
    setAnchorEl(null);
  };

  const NavigationLinks = () => {
    if (user) {
      return (
        <>
          <Grid item>
            <Button
              activeClassName={classes.highlighted}
              className={classes.menuLink}
              component={NavLink}
              to="/create"
            >
              Create User
            </Button>
          </Grid>
        </>
      );
    }
    return (
      <>
        <Grid item>
          <Button
            activeClassName={classes.highlighted}
            className={classes.menuLink}
            component={NavLink}
            to="/users"
          >
            Users
          </Button>
        </Grid>
      </>
    );
  };

  return (
    <AppBar position="static" style={{paddingTop: '10px'}}>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h5" component="div">
              React Admin
            </Typography>
          </Grid>
          <Grid item sm></Grid>
          <NavigationLinks />
            <Grid item>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleIcon style={{marginTop: '-5px'}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={(e) => {
                    signIn(e)
                    handleClose()
                }}>Sign in</MenuItem>
              </Menu>
            </Grid> 
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
