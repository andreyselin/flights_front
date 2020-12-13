import {
    BrowserRouter as Router,
    Switch,
    useRouteMatch,
    Route,
    Link
} from "react-router-dom";
import {CreateFlightRoute} from "./CreateFlightRoute";
import {ActivateFlightRoute} from "./ActivateFlightRoute";

export const FlightsRoute = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/create`}>
        <CreateFlightRoute />
      </Route>
      <Route path={`${match.path}/activate`}>
        <ActivateFlightRoute />
      </Route>
    </Switch>
  );
};
