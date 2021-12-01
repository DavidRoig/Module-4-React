import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { DetailPage } from './detail';
import { ListPage } from './list';
import { LoginPage } from './login';
import { OrganisationContextProvider } from './providers';

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
