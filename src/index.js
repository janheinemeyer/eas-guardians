import React from "react";
//import ReactDOM from "react-dom";
import { hydrate, render } from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

//to get public data.json
var xhttp = new XMLHttpRequest();
var data = {};

const rootElement = document.getElementById("root");

xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    data = JSON.parse(xhttp.responseText);

    if (rootElement.hasChildNodes()) {
      hydrate(
        <BrowserRouter>
          <Route path="*" component={props => <App {...props} data={data} />} />
        </BrowserRouter>,
        rootElement
      );
    } else {
      render(
        <BrowserRouter>
          <Route path="*" component={props => <App {...props} data={data} />} />
        </BrowserRouter>,
        rootElement
      );
    }

    // ReactDOM.render(
    //   <HashRouter>
    //     <Route path="/" component={props => <App data={data} />} />
    //   </HashRouter>,
    //   rootElement
    // );
  }
};

xhttp.open("GET", `${process.env.PUBLIC_URL}/data/data.json`, true);
xhttp.send();
