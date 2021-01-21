import React, {useState} from "react";
import {useSelector} from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import firebase from '../firebase';
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

const NavBar = () => {
  const history = useHistory()
  const admin = useSelector(state => state.admin)
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const signOut = () => {
    console.log("Sign Out");
    firebase.auth().signOut()
      .then(() => {
        history.push("/")
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        {admin && <Grid item>
            <Button
              activeClassName={classes.highlighted}
              className={classes.menuLink}
              component={NavLink}
              to="/create"
            >
              Create User
            </Button>
          </Grid>}
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
                {admin ? <MenuItem onClick={(e) => {
                    handleClose()
                    signOut()
                }}>Sign Out</MenuItem> : 
                <MenuItem onClick={(e) => {
                    handleClose()
                    history.push('/signin')
                }}>Sign in</MenuItem>}
              </Menu>
            </Grid> 
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
