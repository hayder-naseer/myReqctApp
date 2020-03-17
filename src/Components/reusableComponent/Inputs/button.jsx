import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onSubmit, className, label } = this.props;
    return (
      <button onClick={onSubmit} className={className}>
        {label}
      </button>
    );
  }
}

export default Button;
