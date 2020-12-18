import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {FlightsRoute} from "./routes/flights";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/flights">
            <FlightsRoute />
          </Route>
          <Route path="/goods">
            g
            {/*<GoodsRoute />*/}
          </Route>
          <Route path="/">
            h
            {/*<HomeRoute />*/}
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
