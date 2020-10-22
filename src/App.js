import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Notfound from "./components/404";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">hello</div>
      <div></div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
