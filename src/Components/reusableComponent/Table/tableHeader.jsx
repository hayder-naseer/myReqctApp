import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <div className="row">
        <div className="tableHeader">
          <div className="col-12">
            <tr>
              {this.props.columns.map(column => (
                <td>
                  <strong>{column.label}</strong>
                </td>
              ))}
            </tr>
          </div>
        </div>
      </div>
    );
  }
}

export default TableHeader;
