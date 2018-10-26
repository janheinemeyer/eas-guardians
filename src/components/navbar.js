import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ menu: false });
    }
  }
  render() {
    const { data, location } = this.props;

    let home = false;
    let logo = "/eas-guardians.png";

    if (location.pathname === "/") {
      home = true;
      logo = "/eas-guardians-white.png";
    }
    return (
      <div className="navbar">
        <div className="navbar-wrapper-desktop">
          <Link to={"/"} className="navbar-desktop-logo">
            <div
              className="eas-guardians"
              style={{ backgroundImage: `url(${logo})` }}
            />
          </Link>

          {data &&
            data.categories &&
            data.categories.length > 0 &&
            data.categories.map((cat, i) => {
              let classes = "navbar-item";

              if (home) {
                classes = "navbar-item home";
              }

              return (
                <div className={classes} key={i}>
                  <Link to={cat.url || ""}> {cat.title}</Link>
                </div>
              );
            })}
        </div>
        <div className="navbar-wrapper-mobile">
          <div className="navbar-logo">
            <Link to={"/"}>
              <div
                className="eas-guardians"
                style={{ backgroundImage: "url(/eas-guardians.png)" }}
              />
            </Link>
          </div>
          <div className="navbar-mobile-right">
            <div
              className="navbar-mobile-button"
              onClick={() => {
                this.setState({ menu: !this.state.menu });
              }}
            >
              <img src="/images/menu.svg" alt="menu-icon" />
            </div>

            <div className="navbar-mobile-items">
              {this.state.menu &&
                data &&
                data.categories &&
                data.categories.length > 0 &&
                data.categories.map((cat, i) => {
                  return (
                    <Fade bottom delay={i * 100} key={i}>
                      <div className="navbar-item">
                        <Link to={cat.url || ""}> {cat.title}</Link>
                      </div>
                    </Fade>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
