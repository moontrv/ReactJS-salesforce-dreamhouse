import React from "react";
import axios from "axios";

import { withRouter } from "react-router";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("/api/property/"+id)
      .then(response => {
        console.log(response);
        this.setState({property: response.data});
      })
      .catch(error => error);
  }

  render() {
    const property = this.state.property;

    function renderEl(property) {
      return (
        <>
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
        </>
      );
    }
    return property ? renderEl(property) : <p>Loading</p>;
  }
}

export default withRouter(ProductDetail);
