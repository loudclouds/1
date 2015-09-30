import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers';
import createHistory from 'history/lib/createBrowserHistory';

export const createAppStore = () => {
  const rootReducer = combineReducers({
    ...reducers,
    router: routerStateReducer,
  });

  const createRouteEnabledStore = compose(
    reduxReactRouter({ createHistory }),
    applyMiddleware(thunkMiddleware, loggerMiddleware())
  )(createStore);

  const store = createRouteEnabledStore(rootReducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = combineReducers({
        ...require('../reducers'),
        router: routerStateReducer,
      });

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
