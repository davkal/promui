import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Graph from "./containers/Graph";

export default function Routes() {
  return (
    <Switch>
      <Route path="/graph" component={Graph} />
      <Redirect from="/" to="/graph" />
    </Switch>
  );
}
