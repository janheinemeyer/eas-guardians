import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { Navbar, Footer } from "./components";

import { Home, Category } from "./pages";

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar {...this.props} data={this.props.data} />

        <Switch location={this.props.location}>
          <Route
            path="/"
            exact
            render={props => <Home {...props} data={this.props.data} />}
          />

          <Route
            path="/:cid/"
            exact
            render={props => <Category {...props} data={this.props.data} />}
          />
        </Switch>
        <Footer data={this.props.data} />
      </div>
    );
  }
}

export default App;
