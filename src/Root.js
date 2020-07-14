import React from "react";
import Results from "./Components/Results";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/result" component={Results} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Root;
