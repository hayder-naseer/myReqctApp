import React, { Component } from "react";
class TableBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="tBody">
            <div className="col-12">
              {/* {this.props.values.lenght === true ?( this.props.values = NULL)  */}
              {this.props.values.map(item => (
                <tr>
                  {Object.values(item).map(data => (
                    <div className="Data_recive">
                      <td>{data}</td>
                    </div>
                  ))}
                </tr>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default TableBody;
