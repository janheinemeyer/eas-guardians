import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Title, ProfileCardDesc, Input } from "../components";
import Fade from "react-reveal/Fade";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
  }

  render() {
    const {
      title,
      category,
      profiles,
      searchable,
      showTags,
      withLink
    } = this.props;
    return (
      <div className="category-section-container">
        <section className="text-section title">
          <div className="centered">
            {withLink ? (
              <Link to={withLink}>
                <Title title={title} />
              </Link>
            ) : (
              <Title title={title} />
            )}
          </div>
        </section>
        <div className="separator-medium" />

        {searchable && (
          <div>
            <Fade>
              <div className="center">
                <Input
                  value={this.state.keyword}
                  onChange={e => {
                    this.setState({ keyword: e.target.value });
                  }}
                />
              </div>
            </Fade>
            <div className="separator-large" />
          </div>
        )}

        <Row flex>
          {profiles &&
            profiles.length > 0 &&
            profiles
              .filter(profile => profile.category === category)
              .map((profile, i) => {
                if (withLink && i > 1) {
                  return false;
                }

                if (
                  profile.name
                    .toLowerCase()
                    .includes(this.state.keyword.toLowerCase()) ||
                  profile.role
                    .toLowerCase()
                    .includes(this.state.keyword.toLowerCase()) ||
                  profile.description
                    .toLowerCase()
                    .includes(this.state.keyword.toLowerCase())
                ) {
                  return (
                    <Col key={i} s={6} m={6} l={6}>
                      <ProfileCardDesc
                        {...profile}
                        tags={showTags ? profile.tags : undefined}
                      />
                    </Col>
                  );
                }

                return false;
              })}
        </Row>
        <div className="separator-medium" />
        {withLink && (
          <div className="centered">
            <Fade>
              <Link className="show-more-button" to={withLink}>
                Show me more
              </Link>
            </Fade>
          </div>
        )}
      </div>
    );
  }
}

export default Category;
