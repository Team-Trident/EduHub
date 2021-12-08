import React, { useState }  from "react";
import { Link, useHistory } from 'react-router-dom';
import "./App.css";
import Home from "./components/Home.js";
import SignUp from './components/SignUp';
import logo from "./assets/EduhubLogo.jpg";
import {
  Button,
  AppBar,
  Toolbar } from "@material-ui/core";
import ArrayInfo from "./Routes/DataStructure/Array/ArrayInfo";
import QueueInfo from "./Routes/DataStructure/Queue/QueueInfo";
import SSInfo from "./Routes/DataStructure/SortedSet/SSInfo";
import USInfo from "./Routes/DataStructure/UnsortedSet/USInfo";
import SLLInfo from "./Routes/DataStructure/SinglyLinkedList/SLLInfo";
import DLLInfo from "./Routes/DataStructure/DoublyLinkedList/DLLInfo";
import { Route, Switch } from "react-router-dom";
import Drawer from "./components/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    paddingLeft: 300
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    marginRight: "auto"
  },
  drawer: {
    width: 300,
    zIndex: theme.zIndex.appBar -1,
  },
  content: {
    padding: theme.spacing(3)
  }
}));


export default function App() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger();
  const history = useHistory();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
      <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact from="/SignUp" component={SignUp}/>
        <Route exact path="/Routes/DataStructure/Array/ArrayInfo" render={props => <ArrayInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/Queue/QueueInfo" render={props => <QueueInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/SortedSet/SSInfo" render={props => <SSInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/UnsortedSet/USInfo" render={props => <USInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/SinglyLinkedList/SLLInfo" render={props => <SLLInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/DoublyLinkedList/DLLInfo" render={props => <DLLInfo {...props} />} />
      </Switch>
      <div className="shadow">
      <AppBar position="fixed" color="#cae8f6" elevation="8"   className={classes2.appBar}>
        <Toolbar>
        <img src={logo} onClick={() => history.push('/')} alt="EduHub" width="150" height="95"/>
          <Button color="inherit" id="btn" onClick={() => history.push('/SignUp')}>Login/Sign Up</Button>
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
}

