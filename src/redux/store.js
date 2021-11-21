import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducerContacts } from "./contacts/contactsReducers";
import errorReduccer from "./error/errorReducer";
import loaderReducer from "./loader/loaderReduser";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  contacts: reducerContacts,
  loader: loaderReducer,
  error: errorReduccer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["contacts"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production", // => true || false
});

export default store;
