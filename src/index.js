import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import Welcome from "./components/body/Welcome";
import ProductDetail from "./components/body/ProductDetail";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import { Nav } from "react-bootstrap";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdbreact/dist/css/mdb.css';
import "./index.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App container">
      <Router>
        <Nav justify variant="tabs" defaultActiveKey="/">
          <Nav.Link as={Link} to="/">
            Welcome
          </Nav.Link>
          <Nav.Link as={Link} to="/properties">
            Properties
          </Nav.Link>
          <Nav.Link as={Link} to="/brokers">
            Brokers
          </Nav.Link>
          <Nav.Link as={Link} to="/favorites">
            Favorites
          </Nav.Link>
        </Nav>

        <Switch>
          <Route path="/properties">
            <Properties />
          </Route>
          <Route path="/brokers">
            <Broker />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/product-detail/:id" children={<ProductDetail />} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Properties() {
  return <AppWrapper />;
}

function Broker() {
  return <h2>Brokers list</h2>;
}

function Favorites() {
  return <h2>Favorites</h2>;
}

function Home() {
  return <Welcome />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
