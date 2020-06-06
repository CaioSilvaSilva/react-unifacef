import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from '@sentry/browser';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { syncHistoryWithStore } from 'mobx-react-router';

import { router } from './mobx';
import * as store from './mobx';

Sentry.init({dsn: "https://c382da9c98444a388033153b127978fe@o403751.ingest.sentry.io/5266734"});

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
