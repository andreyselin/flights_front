import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    useRouteMatch,
    Route,
    Link
} from "react-router-dom";
import {EditFlightRoute} from "./EditFlightRoute";
import {ActivateFlightRoute} from "./ActivateFlightRoute";

export const FlightsRoute = () => {
  const match = useRouteMatch();
  return (
    <Switch>

      <Route path={`${match.path}/edit/:flightId`}>
        <EditFlightRoute />
      </Route>

      <Route path={`${match.path}/list`}>
        Flight list
      </Route>

      {/* Only for certificates */}

      <Route path={`${match.path}/activate`}>
        <ActivateFlightRoute />
      </Route>
    </Switch>
  );
};
