import RootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const configureStore = ( preloadedState = {} ) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(logger)
  );
};


export default configureStore;
