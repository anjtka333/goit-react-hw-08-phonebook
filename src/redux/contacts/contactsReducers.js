import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactsSuccess,
  getContactsSuccess,
  putFilter,
  removeContactsSuccess,
} from "./contactsActions";

const reducerItems = createReducer([], {
  [addContactsSuccess]: (state, { payload }) => {
    return [...state, payload];
  },

  [removeContactsSuccess]: (state, { payload }) => {
    return state.filter((item) => item.id !== payload);
  },
  [getContactsSuccess]: (_, { payload }) => {
    return payload;
  },
});

const reducerFilter = createReducer("", {
  [putFilter]: (_, { payload }) => payload,
});

export const reducerContacts = combineReducers({
  items: reducerItems,
  filter: reducerFilter,
});
