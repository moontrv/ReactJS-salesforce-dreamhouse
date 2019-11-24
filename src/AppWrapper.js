import React from "react";
import { connect } from "react-redux";
import { fetchProperties } from "./productActions";

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
      return <div>Loading...</div>;
    }

    function renderEl(properties) {
      console.log(properties);
      return (
        <ul>
          {properties.map(property => (
            <li key={property.id}>
              Address: {property.address__c}
              <br />
              Bath room: {property.baths__c}
              <br />
              Bed: {property.beds__c}
              <br />
              City: {property.city__c}
              <br />
              Address: {property.address__c}
              <br />
              Description: {property.description__c}
              <br />
              Address: {property.address__c}
              <br />
              Picture address: {property.picture__c}
              <br />
              Status: {property.status__c}
              <br />
            </li>
          ))}
        </ul>
      );
    }

    return products.data ? renderEl(products.data) : <p>Loading</p>;
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(AppWrapper);
