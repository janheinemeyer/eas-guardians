import React, { Component } from "react";

import "./col.css";

class Col extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  classes() {
    const { x, s, m, l } = this.props;

    let classes = ["col"];

    if (this.props.className) classes.push(this.props.className);

    if (this.props.oneFifth) {
      classes.push("col-one-fifth");
      return classes.join(" ");
    }

    let xNum = Number(x) >= 0 && Number(x) < 13 ? Number(x) : 12;
    let sNum = Number(s) >= 0 && Number(s) < 13 ? Number(s) : 12;
    let mNum = Number(m) >= 0 && Number(m) < 13 ? Number(m) : 12;
    let lNum = Number(l) >= 0 && Number(l) < 13 ? Number(l) : 12;

    classes.push(`col-xs-${xNum}`);

    classes.push(`col-sm-${sNum}`);

    classes.push(`col-md-${mNum}`);

    classes.push(`col-lg-${lNum}`);

    return classes.join(" ");
  }

  render() {
    return (
      <div style={this.props.style} className={this.classes()}>
        {this.props.children}
      </div>
    );
  }
}

export default Col;
