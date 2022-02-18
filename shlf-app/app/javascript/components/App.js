import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'
import Home from './pages/Home'
import React from "react";
import Routes from "../routes/Index";

export default props => <>{Routes}</>;

class App extends Component {
  render() {
    return(
      <Router>
        <h1>This is a React Component</h1>
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/learn">Learn More</NavLink>
          </NavItem>``
        </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shlf" component={AboutUs} />
          <Route path="/blog" component={LearnMore} />
          <Route path="/aboutUs" component={AboutUs} />
        </Switch>
      </Router>
    )
  }
}

export default App