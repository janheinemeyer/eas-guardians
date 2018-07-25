import React, { Component } from "react";

import "./App.css";

import { Home } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home {...this.props} />
      </div>
    );
  }
}

export default App;
