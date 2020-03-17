import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <input {...rest} name={name} id={name} className="form-control" />
      </label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
