import React, { Component } from "react";

class CheckBox extends Component {
  render() {
    const { className, label, type } = this.props;
    return (
      <div>
        <input className={className} type={type} />
        {label}
      </div>
    );
  }
}

export default CheckBox;
