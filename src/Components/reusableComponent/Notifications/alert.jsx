import React, { Component } from "react";

class Alert extends Component {
  render() {
    const { classNames, label } = this.props;
    return (
      <div className={classNames} role="alert">
        {label}
      </div>
    );
  }
}

export default Alert;
