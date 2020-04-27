/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  List,
  Drawer,
  ListItem,
  Button,
} from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";

const useStyles = makeStyles((theme) => ({
  list: {
    marginRight: theme.spacing(2),
    direction: "rtl",
    width: "250px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(5),
  },
  callBtn: {
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [drawerState, setDrawerState] = useState(false);

  const onDrawerClicked = () => {
    setDrawerState(!drawerState);
  };
  return (
    <div>
      <AppBar style={{ backgroundColor: "#27ae60", position: "fixed" }}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={onDrawerClicked}>
            <PetsIcon />
          </IconButton>
          <Button className={classes.callBtn} variant='outlined'>
            צרו קשר - 0523845449
          </Button>

          <Link to='/'>
            <Button color='inherit'>כשכשתא</Button>
          </Link>
          <Link to='/login'>
            <Button
              to='/login'
              primary='Login'
              className={classes.root}
              color='inherit'>
              התחבר
            </Button>
          </Link>
          {/* <Avatar alt='Tal' /> */}
        </Toolbar>
      </AppBar>
      <Drawer open={drawerState} onClose={onDrawerClicked}>
        <List className={classes.list}>
          <ListItem />
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
