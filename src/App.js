import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import HomePage from "./components/HomePage";
import Dashboard from "./components/DashboardPage/Dashboard";
import NotFoundPage from "./components/NotFoundPage";

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default App;
