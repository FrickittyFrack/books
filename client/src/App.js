// React
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
// Pages
import Search from "./pages/search";
import Saved from "./pages/saved";
import NotFound from "./pages/Error404";
// Components
import NavBar from "./components/navbar/index";
// CSS
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = process.env.PUBLIC_URL;

class App extends Component {
  render() {
    return (
      <React>
        Um HELLO?
        <ToastContainer />
        <section className="hero-is-fullheight">
          <div className="head-head">
            <NavBar />
          </div>
          <div className="head-body">
            <Switch>
              <Route path={baseUrl + "/search"} component={Search} />
              <Route path={baseUrl + "/saved"} component={Saved} />
              <Route path={baseUrl + "/not-found"} component={NotFound} />
              <Redirect from="/" exact to={baseUrl + "/search"} />
              <Redirect to={baseUrl + "/not-found"} />
            </Switch>
          </div>
        </section>
      </React>
    );
  }
}

export default App;
