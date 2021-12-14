import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { OrganisationContextProvider } from "./providers";
import { DetailPage, ListPage, LoginPage } from "./pages";
import RickAndMortyPage from "./pages/rick-and-morty";
import { RickAndMortyDetailPage } from "./pages/rick-and-morty-detail";

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
          <Route exact path="/rick-and-morty">
            <RickAndMortyPage />
          </Route>
          <Route path="/rick-and-morty/:id">
            <RickAndMortyDetailPage />
          </Route>
        </Switch>
      </Router>
    </OrganisationContextProvider>
  );
};
