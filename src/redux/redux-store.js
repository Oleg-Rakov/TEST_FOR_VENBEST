import { compose, applyMiddleware, combineReducers, createStore } from "redux";

import thunkMiddleware from 'redux-thunk';
import mainStoreReducer from "./MainStore-Reducer";

const reducers = combineReducers({
    mainStore: mainStoreReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;
export default store;