import React, { Component } from "react";
//import Helmet from "react-helmet";
import Fade from "react-reveal/Fade";
import { Row, Col, Banner, Category } from "../components";

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
        <div className="separator-160" />
        {
          //Expertise Section
        }
        <section className="text-section">
          <Row>
            <Col>
              <div className="flex flex-center flex-col">
                <h2 className="title-medium red">Expertise</h2>
                <div className="page-text-light max-width-text">
                  <Fade right>
                    <p className="text-center fs-20">
                      Years of experience in the start up grind have formed this
                      group into a interdisciplinary but cohesive group of
                      individuals. Based in Berlin, our headquarters is running
                      global operations with the help of remote squads
                      diversified throughout all major timezones.
                    </p>
                  </Fade>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <div className="separator-160" />
        {categories &&
          categories.length > 0 &&
          categories.map((cat, i) => {
            return (
              <div key={i}>
                <Category
                  key={i}
                  title={cat.title}
                  category={cat.key}
                  profiles={profiles}
                  withLink={cat.url}
                />
                <div className="separator-160" />
              </div>
            );
          })}

        {
          //Name section
        }
        <section className="text-section">
          <Row>
            <Col>
              <div className="flex flex-center flex-col">
                <h2 className="title-medium red">Name?</h2>
                <div className="page-text-light max-width-text">
                  <Fade right>
                    <p className="text-center fs-20">
                      Ea, the sumerian master shaper of the world, god of wisdom
                      and of all magic, is our symbol for hard work and quality
                      but also an ode to creativity and pragmatism. As his
                      guards we stand for the idea that it is on us to shape the{" "}
                      <sup>(digital)</sup> world for the better.
                    </p>
                  </Fade>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <div className="separator-160" />
      </div>
    );
  }
}

export default Home;
