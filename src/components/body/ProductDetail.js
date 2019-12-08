import React from "react";
import axios from "axios";

import { withRouter } from "react-router";
import { Spinner } from "react-bootstrap";
import { MDBIcon } from "mdbreact";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("/api/property/" + id)
      .then(response => {
        console.log(response);
        this.setState({ property: response.data });
      })
      .catch(error => error);
  }

  render() {
    const property = this.state.property;

    function renderEl(property) {
      var imageStyle = {
        backgroundImage: `url(${property.picture__c})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "800px"
      };

      var brokerImageStyle = {
        backgroundImage: `url(${property.broker__c_picture__c})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "3.6rem",
        height: "3.6rem",
        borderRadius: "50%",
        marginRight: "1rem"
      };

      return (
        <div className="property-list-detail">
          <div className="col-xs-12" style={imageStyle}></div>
          <div className="col-xs-12 m-mt1rem">
            <p>{property.title__c}</p>
            <p>{property.description__c}</p>
            <div className="m-mt1rem">
              <MDBIcon icon="moon" />
              <span className="m-ml1rem">Bedrooms</span>
            </div>
            <div>
              <MDBIcon icon="chart-pie" />
              <span className="m-ml1rem">Bathrooms</span>
            </div>
            <div>
              <MDBIcon icon="tag" />
              <span className="m-ml1rem">Asking Price</span>
            </div>
            <div className="m-mt1rem broker-detail">
              <div style={brokerImageStyle}></div>
              <div>
                <p>{property.broker__c_name}</p>
                <p>{property.broker__c_title__c}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return property ? (
      renderEl(property)
    ) : (
      <Spinner
        animation="border"
        role="status"
        className="property-list-detail"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
}

export default withRouter(ProductDetail);
