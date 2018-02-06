import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Alerts from "./containers/Alerts";
import Graph from "./containers/Graph";
import Status from "./containers/Status";

export default function Routes() {
  return (
    <Switch>
      <Route path="/alerts" component={Alerts} />
      <Route path="/graph" component={Graph} />
      <Route path="/status" component={Status} />
      <Redirect from="/" to="/graph" />
    </Switch>
  );
}
