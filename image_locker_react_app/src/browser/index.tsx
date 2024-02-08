// Load polyfills (once, on the top of our web app)
import "core-js/stable";
import "regenerator-runtime/runtime";

import "./index.css";

/**
 * Frontend code running in browser
 */
import * as React from "react";
import { hydrate } from "react-dom";
import { Router, Route, Switch } from "wouter";
import Home from "../Home";
import Lock from "../Lock";
import Login from "../Login";
import Register from "../Register";
import ConfigContext from "../components/ConfigContext";
import { Config } from "../server/config";

const config = (window as any).__CONFIG__ as Config;
delete (window as any).__CONFIG__;

/** Components added here will _only_ be loaded in the web browser, never for server-side rendering */
const render = () => {
  hydrate(
    <>
      {/* The configuration is the outmost component. This allows us to read the configuration even in the theme */}
      <ConfigContext.Provider value={config}>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/lock" component={Lock} />
          </Switch>
        </Router>
      </ConfigContext.Provider>
    </>,
    document.getElementById("root"),
  );
};

render();
