import { createStore } from "redux";
import RootReducer from './reducers';
import storeSynchronize from 'redux-localstore'


const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

storeSynchronize(store)
export default store;