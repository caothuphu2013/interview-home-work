import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import LogoutPage from './pages/LogoutPage';
import NotFoundPage from './pages/NotFoundPage';

import "antd/dist/antd.css";

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
