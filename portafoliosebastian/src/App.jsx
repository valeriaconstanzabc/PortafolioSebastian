// <-------------------IMPORT LIBRARY------------------->
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

// <--------------------IMPORT VIEWS-------------------->
import Welcome from './Views/Welcome';

function App() {
  return (
    <Router>
      <NavBar />
        <Switch>

          <Route path="/" exact>
            <Welcome />
          </Route>

        </Switch>
    </Router>
  )
}

export default App;
