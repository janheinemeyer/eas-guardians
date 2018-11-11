import React, { Component } from "react";
//import Helmet from "react-helmet";
//import Fade from "react-reveal/Fade";
import { Category } from "../components";

import "./category.css";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profiles, categories } = this.props.data;

    const catId = this.props.match.params.cid;
    let category;
    let title;

    categories.forEach(cat => {
      if (cat.url.substring(1) === catId) {
        title = cat.title;
        category = cat.key;
      }
    });

    return (
      <div className="category-page">
        <div className="navbar-shadow" />
        <div className="separator-large" />
        <Category
          searchable
          key={category}
          title={title}
          category={category}
          profiles={profiles}
          showTags
        />
        <div className="separator-large" />
      </div>
    );
  }
}

export default Page;
