import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./title.css";

class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="page-title">
        <Fade bottom>
          <h2>{title || "Title here"}</h2>
        </Fade>
      </div>
    );
  }
}

export default Title;
