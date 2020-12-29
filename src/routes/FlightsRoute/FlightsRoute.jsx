import {Switch, useRouteMatch, Route, Link} from 'react-router-dom';
import {EditFlightRoute} from './EditFlightRoute';
import ActivateFlightRoute from './ActivateFlightRoute/ActivateFlightRoute';

const FlightsRoute = () => {
  const match = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.path}/edit/:flightId`}>Edit</Link>
        </li>
        <li>
          <Link to={`${match.path}/list`}>Flight list</Link>
        </li>
        <li>
          <Link to={`${match.path}/activate`}>Activate Flight Route</Link>
        </li>
      </ul>
      <Switch>

        <Route path={`${match.path}/edit/:flightId`}>
          <EditFlightRoute/>
        </Route>

        <Route path={`${match.path}/list`}>
          Flight list
        </Route>

        {/* Only for certificates */}

        <Route path={`${match.path}/activate`} component={ActivateFlightRoute}/>
      </Switch>
    </div>
  );
};

export default FlightsRoute;
