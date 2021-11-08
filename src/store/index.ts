import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducer";

const enhancer = compose(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, enhancer);

export default store;
