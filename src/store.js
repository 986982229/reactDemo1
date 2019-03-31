import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducer";

// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
