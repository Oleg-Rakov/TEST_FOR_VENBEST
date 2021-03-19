import { compose, applyMiddleware, combineReducers, createStore } from "redux";

import thunkMiddleware from 'redux-thunk';
import listPeopleReducer from "./ListPeople-Reducer";

let reducers = combineReducers({
    mainStore: listPeopleReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;
export default store;