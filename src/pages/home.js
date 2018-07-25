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
        {
          //DESIGN
        }
        <Row>
          <Col s={6} m={6} l={6}>
            <Title title="Design" />
          </Col>
          <Col s={6} m={6} l={6} />
        </Row>
        <Row>
          {
            //DESIGN PEOPLE
          }

          <Col s={6} m={6} l={6}>
            <ProfileCard />
          </Col>
          <Col s={6} m={6} l={6}>
            <ProfileCard />
          </Col>
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
