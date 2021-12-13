import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { OrganisationContextProvider } from "./providers";
import { DetailPage, ListPage, LoginPage } from "./pages";

export const App = () => {
  return (
    <OrganisationContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/list">
            <ListPage />
          </Route>
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </OrganisationContextProvider>
  );
};
