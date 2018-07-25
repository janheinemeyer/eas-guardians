import React, { Component } from "react";

import "./client.css";

class Client extends Component {
  classes() {
    let classes = ["client-link"];

    if (this.props.floatRight) {
      classes.push("client-link-float-right");
    } else {
      classes.push("client-link-float-left");
    }

    return classes.join(" ");
  }
  render() {
    const { image, title, link } = this.props;
    return (
      <div className={this.classes()}>
        {image && (
          <a href={link} target="_blank" alt={title}>
            <img src={image} />
          </a>
        )}
      </div>
    );
  }
}

export default Client;
