import React, { Component } from "react";
import { Nav } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Welcome</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Properties</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Brokers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Favorites</Nav.Link>
          </Nav.Item>
        </Nav>
      </Router>
    );
  }
}

export default Navbar;
