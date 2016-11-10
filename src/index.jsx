import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
//import { Router, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import { syncHistoryWithStore } from 'react-router-redux';
import routes from './components/routes';
import configureStore from './configureStore';

const store = configureStore();
//const history = syncHistoryWithStore(hashHistory, store);
//history.listen(location => {
//  window.ga('send', {
//    hitType: 'pageview',
//    page: location.pathname
//  });
//});

ReactDOM.render(
  <Provider store = {store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
