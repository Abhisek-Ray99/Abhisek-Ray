import React from "react";
import About from "./pages/About";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Social from "./components/Social/Social";
import { Globalstyle, Mainbody } from "./Globalstyles";

function App() {
  return (
    <Router>
      <Globalstyle />
      <Mainbody>
        <Nav />
        <Switch>
          <Intro path="/" exact component={Intro} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
        <Social />
      </Mainbody>
    </Router>
  );
}

export default App;
