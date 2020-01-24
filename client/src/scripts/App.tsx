import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { History } from 'history';

import i18n from './i18n';
import root from '_/modules';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const store = createStore(root, (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)());

i18n.init();

interface Props extends WithTranslation {
  history: History<History.PoorMansUnknown>;
}

function App({ history, t }: Props): JSX.Element {
  return (
    <Router history={history}>
      <Provider store={store}>
        <Switch>
          <Route component={(): JSX.Element => (<div>{t('Hello World!')}</div>)} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default withTranslation()(App);
