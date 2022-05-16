import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer } from "redux-persist/";
import storage from "redux-persist/lib/storage";
import favoriteReducer from "../slices/favoriteSlice";
import searchSlice from "../slices/searchSlice";

/* export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    search: searchSlice,
  },
});
*/

const reducers = combineReducers({
  favorite: favoriteReducer,
  search: searchSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  transform: [
    encryptTransform({
      secretKey: process.env.PROCESS_DEV_PERSIST_KEY,
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});
