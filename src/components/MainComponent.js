import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Header from "./utils/header";
import Footer from "./utils/footer";

import Home from "./pages/home";
import Affitti from "./pages/rentals";
import Inventario from "./pages/inventory";

import Scheduler from "./pages/scheduler";
import Add from "./pages/forms/addItem/addItem.component";

const Main = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            exact
            path="/studio"
            component={() => <Scheduler name="Studio" />}
          />
          <Route
            exact
            path="/stanzino"
            component={() => <Scheduler name="Stanzino" />}
          />
          <Route
            path="/attrezzatura"
            component={() => <Affitti name="Attrezzatura" />}
          />
          <Route
            path="/inventario"
            component={() => <Inventario name="Gestione Inventario" />}
          />
          <Route path="/tmp" component={() => <Add />} />
          <Redirect to="/" />
        </Switch>
      </main>
      <footer>
        <Footer copyright="POLI.RADIO" />
      </footer>
    </Fragment>
  );
};

export default Main;
