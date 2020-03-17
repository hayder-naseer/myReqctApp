import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Dashbooard from "./Components/Dsahboard/dashboard";
import LoginForm from "./Components/Login/login";
import UserDetail from "./Components/UserDetail/userDetail";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/userDetail" component={UserDetail} />
            <Route path="/dashboard" component={Dashbooard} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
