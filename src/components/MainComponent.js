import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Header from "./HeaderComponent";
import StickyFooter from "./FooterComponent";

import Home from "./HomeComponent";
import Affitti from "./AffittiComponent";
import Inventario from "./Inventario/InventarioComponent";
import { SchedulerPresentation } from "./SchedulerComponent";

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
            component={() => <SchedulerPresentation name="Studio" />}
          />
          <Route
            exact
            path="/stanzino"
            component={() => <SchedulerPresentation name="Stanzino" />}
          />
          <Route
            path="/attrezzatura"
            component={() => <Affitti name="Attrezzatura" />}
          />
          <Route
            path="/inventario"
            component={() => <Inventario name="Gestione Inventario" />}
          />
          <Redirect to="/" />
        </Switch>
      </main>
      <footer>
        <StickyFooter />
      </footer>
    </Fragment>
  );
};

export default Main;
