import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./profileCard.css";

class ProfileCard extends Component {
  render() {
    const { image, name, role } = this.props;
    return (
      <div className="profile-card">
        <Fade>
          <figure
            style={{
              backgroundImage: `url(${image || "/images/placeholder.svg"})`
            }}
          />
          <div className="profile-info">
            <h3> {name || "Name Here"} </h3>
            <p> {role || "Role Here"} </p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ProfileCard;
