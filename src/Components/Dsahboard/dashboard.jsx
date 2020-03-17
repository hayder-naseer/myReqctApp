import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../reusableComponent/navBar";
class Dashbooard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="dashboard_form">
          <NavBar />
          <Link
            to="/userDetail"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            Proceed
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashbooard;
