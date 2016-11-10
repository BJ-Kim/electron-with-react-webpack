import React from 'react';
import {
  Router, Route, IndexRoute,
} from 'react-router';
import App from './pages/App';
import IntroPage from './pages/IntroPage';
import LoginPage from './pages/LoginPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IntroPage} />
    <Route path="/login" component={LoginPage} />
  </Route>
);

export default routes;
