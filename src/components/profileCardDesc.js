import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./profileCardDesc.css";

class ProfileCardDesc extends Component {
  render() {
    const { image, name, role, description, tags } = this.props;
    return (
      <div className="profile-card-description">
        <div className="profile-card-image">
          <Fade>
            <figure
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${image ||
                  "/images/placeholder.svg"})`
              }}
            />
          </Fade>
        </div>
        <div className="profile-card-info">
          <Fade>
            <h3 className="profile-title"> {name || ""} </h3>
          </Fade>
          <Fade delay={200}>
            <p className="profile-role"> {role || ""} </p>
          </Fade>

          <Fade bottom distance="50%" delay={400}>
            <p className="profile-description">{description || ""}</p>
          </Fade>

          <Fade delay={600}>
            <div className="profile-tags">
              {tags &&
                tags.length > 0 &&
                tags.map((tag, i) => {
                  return (
                    <div className="profile-tag" key={i}>
                      {tag}
                    </div>
                  );
                })}
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default ProfileCardDesc;
