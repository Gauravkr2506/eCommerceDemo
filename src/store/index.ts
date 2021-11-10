import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducer";

const persistConfig = {
  type: "UPDATE_ROOT_REDUCER_DATA",
  key: "root",
  payload: { storage },
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = compose(applyMiddleware(thunkMiddleware));

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store, null, () => persistConfig);
  return { store, persistor };
};
