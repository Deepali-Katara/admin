import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./components/login";
import { Forgot } from "./components/forgot";
import { Dashboard } from "./components/dashboard";
import { Reset } from "./components/reset";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/reset" component={Reset} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
