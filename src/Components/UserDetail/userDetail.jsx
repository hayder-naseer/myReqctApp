import React from "react";
import Joi from "joi-browser";
import NavBar from "../reusableComponent/navBar";
import Form from "../reusableComponent/fromMiddleWare/form";
import Button from "../reusableComponent/Inputs/button";
import Table from "../reusableComponent/Table/table";
class UserDetail extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      phone: ""
    },
    columns: [
      { label: "first Name" },
      { label: "last Name" },
      { label: "username" },
      { label: "password" },
      { label: "email" },
      { label: "phone" }
    ],
    savedData: [],
    errors: {},
    isError: false
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    email: Joi.string()
      .required()
      .label("Email")
      .email(),
    phone: Joi.number()
      .required()
      .label("Phone"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  doSubmit = () => {
    const { data, savedData } = this.state;
    savedData.push(data);
    this.setState({ savedData });
  };
  render() {
    console.log();
    return (
      <React.Fragment>
        <NavBar />
        <div className="UserDetail">
          <div className="UserDetail_Heading">
            <h1>User Detail</h1>
          </div>
          <div className="TableForm">
            <div className="row">
              <div className="col-12">
                <form onSubmit={this.handleSubmit}>
                  <div className="col-6">
                    {this.renderInput("firstName", "First Name")}
                  </div>
                  <div className="col-6">
                    {this.renderInput("lastName", "Last Name")}
                  </div>
                  <div className="col-6">
                    {this.renderInput("username", "Username")}
                  </div>
                  <div className="col-6">
                    {this.renderInput("password", "Password", "password")}
                  </div>
                  <div className="col-6">
                    {this.renderInput("email", "Email")}
                  </div>
                  <div className="col-6">
                    {this.renderInput("phone", "Phone")}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="tableButton">
            <div className="row">
              <div className="col-12">
                <Button
                  label="Add to tabel"
                  className="btn btn-success"
                  onSubmit={this.doSubmit}
                />
              </div>
            </div>
          </div>
          <Table columns={this.state.columns} values={this.state.savedData} />
        </div>
      </React.Fragment>
    );
  }
}

export default UserDetail;
