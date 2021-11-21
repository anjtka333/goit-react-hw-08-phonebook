import { createReducer } from "@reduxjs/toolkit";
import {
  addContactsError,
  addContactsRequest,
  getContactsError,
  getContactsRequest,
  removeContactsError,
  removeContactsRequest,
} from "../contacts/contactsActions";

const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReduccer = createReducer(null, {
  [getContactsError]: setError,
  [getContactsRequest]: resetError,
  [addContactsError]: setError,
  [addContactsRequest]: resetError,
  [removeContactsError]: setError,
  [removeContactsRequest]: resetError,
});

export default errorReduccer;
