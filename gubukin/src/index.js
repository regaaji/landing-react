
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
//import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

// pages 
import LandingPage from "pages/examples/LandingPage.js";
import Login from "pages/examples/Login.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) =>  <LandingPage {...props} />} />

        <Route path="/LoginAdmin" render={(props) =>  <Login {...props} />} />
      
       
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
