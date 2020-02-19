import React, { Component } from 'react';
import {Redirect, BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Auth from './Auth';
import Login from './component/Login';
import Register from './component/Register';
import Itenary from './component/Itenary';
import Cart from './component/Cart';
// using CommonJS modules
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;
export default class App extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/itenary" exact>
          <Itenary />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>    
        <Route exact path="/">
            <Redirect to="/itenary" />
        </Route>
        <Route path="/auth">
            <Auth />
        </Route>
        <Route path="/cart">
            <Cart />
        </Route>
        {/* <Route path="/itenary">
          <Itenary />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
      </BrowserRouter>


    )
  }
}

