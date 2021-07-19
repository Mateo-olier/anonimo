import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { statuDetailsReducer, statusListReducer } from "./reducers/StatusReducers";

const initialState = {};
const reducer = combineReducers({
  statusList: statusListReducer,
  statuDetails: statuDetailsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
