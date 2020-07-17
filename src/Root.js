import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartQuiz from "./Components/StartQuiz";
import App from "./App";

function Root() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"} component={StartQuiz} />
          <Route path={"/game"} component={App} />
        </Switch>
      </div>
    </Router>
  );
}

export default Root;
