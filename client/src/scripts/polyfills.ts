/* eslint-disable import/prefer-default-export */
import { createBrowserHistory, createHashHistory, History } from 'history';

const supportsHistoryAPI = !!window.history.pushState;

export function getHistory(contextPath: string): History<History.PoorMansUnknown> { // TODO: IE 9
  if (!supportsHistoryAPI && window.location.pathname !== contextPath) {
    window.location.href = contextPath;
  }
  return supportsHistoryAPI ? createBrowserHistory({ basename: contextPath }) : createHashHistory();
}
