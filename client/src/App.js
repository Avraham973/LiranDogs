/** @format */

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, Container } from "@material-ui/core";

import "./App.css";
// Component
import Home from "../src/App/Component/HomePage/Home";
import Login from "../src/App/Component/Auth/Login";
import Navbar from "../src/App/Component/Layout/Navbar";
import AppFooter from "./App/Component/Layout/Footer";

//RTL
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

const theme = createMuiTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr",
    display: "flex",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
  direction: "rtl",
}));

function App() {
  const classes = useStyles();

  const [drawerState, setDrawerState] = useState(false);

  const onDrawerClicked = () => {
    setDrawerState(!drawerState);
  };

  return (
    <div>
      <Router>
        <ThemeProvider theme={theme} jss={jss}>
          <div dir='rtl'>
            <Navbar stickyHeader={true} />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={Home} />
            </Switch>

            <AppFooter />
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
