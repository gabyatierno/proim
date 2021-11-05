import { createStore } from 'redux';
import storeSynchronize from 'redux-localstore';
import RootReducer from './reducers';

const store = createStore(
  RootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

storeSynchronize(store);
export default store;
