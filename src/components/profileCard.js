import React, { Component } from "react";

import "./profileCard.css";

class ProfileCard extends Component {
  render() {
    const { image, name, role } = this.props;
    return (
      <div className="profile-card">
        <figure
          style={{
            backgroundImage: `url(${image || "/images/placeholder.svg"})`
          }}
        />
        <div className="profile-info">
          <h3> {name || "Name Here"} </h3>
          <p> {role || "Role Here"} </p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
