import React from "react";
import Joi from "joi-browser";
import Form from "../reusableComponent/fromMiddleWare/form";
import Button from "../reusableComponent/Inputs/button";
import Alert from "../reusableComponent/Notifications/alert";
import Images from "../Images/images";
import CheckBox from "../reusableComponent/Inputs/checkBox";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "", user: "Haider", pass: "1234" },
    errors: {},
    isError: false
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    if (
      this.state.data.username === this.state.data.user &&
      this.state.data.password === this.state.data.pass
    ) {
      window.location = "/dashboard";
    } else {
      this.setState({ isError: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="Login_form">
          <div className="row">
            <div className="Login_body">
              <div className="col-3">
                <div className="Login_Heading">
                  <h1>Login</h1>
                </div>
                <Images />
                <div className="Login_inputForm">
                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                  </form>
                  <CheckBox
                    className="input-group-text"
                    type="checkbox"
                    label="Remember"
                  />
                   </div>
                  {this.state.isError === true ? (
                    <Alert
                      classNames="alert alert-danger"
                      label="Username or Password is worng"
                    />
                  ) : null}
                 <div className="Button_form">
                  <Button
                    label="Sign In"
                    className="btn btn-success"
                    onSubmit={this.doSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
