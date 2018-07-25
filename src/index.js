import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

var xhttp = new XMLHttpRequest();
var data = {};
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    data = JSON.parse(xhttp.responseText);
    ReactDOM.render(<App profiles={data} />, document.getElementById("root"));
  }
};

xhttp.open("GET", `${process.env.PUBLIC_URL}/profiles/profiles.json`, true);
xhttp.send();
