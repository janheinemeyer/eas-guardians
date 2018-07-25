import React, { Component } from "react";
import Helmet from "react-helmet";

import { Row, Col, Title, ProfileCard, Client } from "../components";

import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profiles, clients } = this.props.data;

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
        <section className="text-section">
          <Row>
            <Col s={6} m={6} l={6}>
              <Title title="Design" />
            </Col>
            <Col s={6} m={6} l={6} />
          </Row>
        </section>
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
        {
          //ENGINEERING
        }
        <section className="text-section">
          <Row>
            <Col s={6} m={6} l={6}>
              <Title title="Engineering" />
            </Col>
            <Col s={6} m={6} l={6} />
          </Row>
        </section>
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
        {
          //CONSULTING
        }
        <section className="text-section">
          <Row>
            <Col s={6} m={6} l={6}>
              <Title title="Consulting" />
            </Col>
            <Col s={6} m={6} l={6} />
          </Row>
        </section>
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
        {
          //MARKETING
        }
        <section className="text-section">
          <Row>
            <Col s={6} m={6} l={6}>
              <Title title="Marketing" />
            </Col>
            <Col s={6} m={6} l={6} />
          </Row>
        </section>
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
        {
          //Expertise Section
        }
        <section className="text-section">
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
                  Years of experience in the start up grind have formed this
                  group into a interdisciplinary but cohesive group of
                  individuals. Based in Berlin, our headquarters is running
                  global operations with the help of remote squads diversified
                  throughout all major timezones.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        {
          //Name section
        }
        <section className="text-section">
          <Row>
            <Col s={6} m={6} l={6}>
              <Title title="Name?" />
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
                  Ea, the sumerian master shaper of the world, god of wisdom and
                  of all magic, is our symbol for hard work and quality but also
                  an ode to creativity and pragmatism. As his guards we stand
                  for the idea that it is on us to shape the{" "}
                  <sup>(digital)</sup> world for the better.
                </p>
              </div>
            </Col>
          </Row>
        </section>
        <div className="separator-large" />
        {
          //Clients
        }
        <section className="footer-clients">
          <Row>
            <Col s={6} m={6} l={6}>
              <Title title="Clients" />
            </Col>
            <Col s={6} m={6} l={6} />
          </Row>

          {//Map Clients
          clients &&
            clients.length > 0 &&
            clients.map((client, i) => {
              console.log(i % 2);
              return (
                <div key={i}>
                  <Client
                    title={client.title}
                    image={client.image}
                    link={client.link}
                    floatRight={i % 2}
                  />
                  <div className="clear" />
                </div>
              );
            })}
        </section>
      </div>
    );
  }
}

export default Home;
