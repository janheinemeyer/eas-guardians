import React, { Component } from "react";
//import Helmet from "react-helmet";
import Fade from "react-reveal/Fade";
import { Row, Col, Title, Banner, Category } from "../components";

import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profiles, categories } = this.props.data;

    return (
      <div className="home-page">
        <Banner />

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
                <Fade right>
                  <p>
                    Years of experience in the start up grind have formed this
                    group into a interdisciplinary but cohesive group of
                    individuals. Based in Berlin, our headquarters is running
                    global operations with the help of remote squads diversified
                    throughout all major timezones.
                  </p>
                </Fade>
              </div>
            </Col>
          </Row>
        </section>
        {categories &&
          categories.length > 0 &&
          categories.map((cat, i) => {
            return (
              <Category
                key={i}
                title={cat.title}
                category={cat.key}
                profiles={profiles}
                withLink={cat.url}
              />
            );
          })}

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
                <Fade right>
                  <p>
                    Ea, the sumerian master shaper of the world, god of wisdom
                    and of all magic, is our symbol for hard work and quality
                    but also an ode to creativity and pragmatism. As his guards
                    we stand for the idea that it is on us to shape the{" "}
                    <sup>(digital)</sup> world for the better.
                  </p>
                </Fade>
              </div>
            </Col>
          </Row>
        </section>
        <div className="separator-large" />
      </div>
    );
  }
}

export default Home;
