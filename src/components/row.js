import React, { Component } from "react";

import "./row.css";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  classes() {
    let classes = ["row-wrapper"];

    if (this.props.className) classes.push(this.props.className);

    return classes.join(" ");
  }

  rowClasses() {
    let classes = ["row"];

    if (this.props.liquid) classes.push("row-liquid");

    if (this.props.layout) classes.push("row-layout");

    if (this.props.flex) classes.push("row-flex");

    return classes.join(" ");
  }

  render() {
    return (
      <div className={this.classes()} style={this.props.style}>
        <div className={this.rowClasses()}>
          {this.props.children}
          <div className="clear" />
        </div>
      </div>
    );
  }
}

export default Row;
