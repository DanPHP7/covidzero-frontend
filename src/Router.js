import React from "react";
import { Route, Switch } from "react-router-dom";
import Map from "./pages/Map";
import Cities from "./pages/Cities";
import Area from "./pages/Area";
import Help from "./pages/Help";
import News from "./pages/News";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Map} />
      <Route path="/cities" component={Cities} />
      <Route path="/area" component={Area} />
      <Route path="/help" component={Help} />
      <Route path="/news" component={News} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
