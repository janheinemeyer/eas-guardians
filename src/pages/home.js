import React, { Component } from "react";
import Helmet from "react-helmet";

import { Row, Col, Title, ProfileCard } from "../components";

import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profiles } = this.props;
    console.log(this.props.profiles);
    return (
      <div className="home-page">
        <Helmet>
          <meta name="description" content="Content " />
        </Helmet>

        <Row liquid>
          <Col>
            <h1>Particles Here</h1>
          </Col>
        </Row>

        <Row>
          {
            //DESIGN
          }
          <Col s={6} m={6} l={6}>
            <Title title="Design" />
          </Col>
          <Col s={6} m={6} l={6} />
        </Row>
        <Row>
          {//DESIGN PEOPLE
          profiles &&
            profiles.length > 0 &&
            profiles
              .filter(profile => profile.category === "design")
              .map((profile, i) => {
                return (
                  <Col key={i} s={6} m={6} l={6}>
                    <ProfileCard
                      name={profile.name}
                      role={profile.role}
                      image={profile.image}
                    />
                  </Col>
                );
              })}
        </Row>
        <Row>
          {
            //ENGINEERING
          }
          <Col s={6} m={6} l={6}>
            <Title title="Engineering" />
          </Col>
          <Col s={6} m={6} l={6} />
        </Row>
        <Row>
          {//ENGINEERING PEOPLE
          profiles &&
            profiles.length > 0 &&
            profiles
              .filter(profile => profile.category === "engineering")
              .map((profile, i) => {
                return (
                  <Col key={i} s={6} m={6} l={6}>
                    <ProfileCard
                      name={profile.name}
                      role={profile.role}
                      image={profile.image}
                    />
                  </Col>
                );
              })}
        </Row>
        <Row>
          {
            //CONSULTING
          }
          <Col s={6} m={6} l={6}>
            <Title title="Consulting" />
          </Col>
          <Col s={6} m={6} l={6} />
        </Row>
        <Row>
          {//CONSULTING PEOPLE
          profiles &&
            profiles.length > 0 &&
            profiles
              .filter(profile => profile.category === "consulting")
              .map((profile, i) => {
                return (
                  <Col key={i} s={6} m={6} l={6}>
                    <ProfileCard
                      name={profile.name}
                      role={profile.role}
                      image={profile.image}
                    />
                  </Col>
                );
              })}
        </Row>
        <Row>
          {
            //MARKETING
          }
          <Col s={6} m={6} l={6}>
            <Title title="Marketing" />
          </Col>
          <Col s={6} m={6} l={6} />
        </Row>
        <Row>
          {//MARKETING PEOPLE
          profiles &&
            profiles.length > 0 &&
            profiles
              .filter(profile => profile.category === "marketing")
              .map((profile, i) => {
                return (
                  <Col key={i} s={6} m={6} l={6}>
                    <ProfileCard
                      name={profile.name}
                      role={profile.role}
                      image={profile.image}
                    />
                  </Col>
                );
              })}
        </Row>

        <Row>
          <Col s={6} m={6} l={6}>
            <Title title="Expertise" />
          </Col>
          <Col s={6} m={6} l={6} />
        </Row>
        <Row>
          <Col s={6} m={6} l={6}>
            <div style={{ height: "1px" }} />
          </Col>
          <Col s={6} m={6} l={6}>
            <div className="page-text-light">
              <p>
                Years of experience in the start up grind have formed this group
                into a interdisciplinary but cohesive group of individuals.
                Based in Berlin, our headquarters is running global operations
                with the help of remote squads diversified throughout all major
                timezones.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
