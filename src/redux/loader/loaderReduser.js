import { createReducer } from "@reduxjs/toolkit";
import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
  removeContactsError,
  removeContactsRequest,
  removeContactsSuccess,
} from "../contacts/contactsActions";

const loaderReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [removeContactsRequest]: () => true,
  [removeContactsSuccess]: () => false,
  [removeContactsError]: () => false,
});

export default loaderReducer;
