import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from './components/home';

import { Switch, Redirect } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router >
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route
          render={props => {
            return <Redirect to="/home" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
