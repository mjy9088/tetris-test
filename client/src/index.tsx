import 'core-js/stable/object/assign';
import 'core-js/features/map';
import 'core-js/features/set';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './scripts/App';
import { getHistory } from './scripts/polyfills';

import './style.scss';

let initialized = false;
let history;

function initApp(contextPath: string): void {
  if (initialized) return;
  history = getHistory(contextPath);
  ReactDOM.render((<App history={history} />), document.getElementById('root'));
  initialized = true;
}

initApp('/');
