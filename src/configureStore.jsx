import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore () {
  const middlewares = [thunk];
  return createStore(
    reducers,
    applyMiddleware.apply(null, middlewares)
  );
}
