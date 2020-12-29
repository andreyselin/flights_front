import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import FlightsRoute from './routes/FlightsRoute/FlightsRoute';
import GoodsRoute from './routes/GoodsRoute/GoodsRoute';
import HomeRoute from './routes/HomeRoute/HomeRoute';

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/goods">Goods</Link>
            </li>
            <li>
              <Link to="/flights">Flights</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/flights" component={FlightsRoute}/>
          <Route path="/goods" component={GoodsRoute}/>
          <Route path="/" component={HomeRoute}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
