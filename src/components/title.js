import React, { Component } from "react";

import "./title.css";

class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="page-title">
        <h2>{title || "Title here"}</h2>
      </div>
    );
  }
}

export default Title;
