import React from "react";
import { connect } from "react-redux";
import { fetchProperties } from "./productActions";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { Spinner } from "react-bootstrap";

import ProductDetail from "./components/body/ProductDetail";

class AppWrapper extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProperties());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <Spinner animation="border" role="status" className="property-list-wrapper"><span className="sr-only">Loading...</span></Spinner>;
    }

    function renderEl(properties) {
      console.log(properties);
      return (
        <ul className="property-list-wrapper">
          {properties.map(property => (
            <li key={property.id} className="property-item">
              <Link to={"/product-detail/" + property.sfid} className="property-link">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="property-list">
                      <div className="img-list">
                        <img src={property.picture__c}></img>
                      </div>
                      <div className="">
                        <p>{property.title__c}</p>
                        <p>
                          <span>{property.city__c}, </span>
                          <span>{property.state__c} </span>
                          <span>{property.price__c}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return products.data ? renderEl(products.data) : <div>Loading...</div>;
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(AppWrapper);
