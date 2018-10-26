import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { Row, Col, Title, Client } from "../components";
import "./footer.css";

class Footer extends Component {
  render() {
    const { clients } = this.props.data;
    return (
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
            return (
              <div key={i}>
                <Fade left={i % 2 ? true : false} right={i % 2 ? false : true}>
                  <Client
                    title={client.title}
                    image={client.image}
                    link={client.link}
                    floatRight={i % 2}
                  />
                  <div className="clear" />
                </Fade>
              </div>
            );
          })}
      </section>
    );
  }
}

export default Footer;
