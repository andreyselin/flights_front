import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
