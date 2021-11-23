import axios from "axios";
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
} from "./contactsActions";
import {
  addContactApi,
  getContactsApi,
  removeContactsApi,
} from "../../service/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactsRequest());

  addContactApi(contact)
    .then((data) => dispatch(addContactsSuccess(data)))
    .catch((err) => dispatch(addContactsError(err.message)));
};

export const getContacts = () => (dispatch) => {
  dispatch(getContactsRequest());

  getContactsApi()
    .then((data) => dispatch(getContactsSuccess(data)))
    .catch((err) => dispatch(getContactsError(err.message)));
};

// export const removeContacts = createAsyncThunk(
//   "contacts/removeContactsRequest",
//   async (id, { rejectWithValue }) => {
//     try {
//       await axios.delete(`contacts/${id}`);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const removeContacts = (id) => (dispatch) => {
  dispatch(removeContactsRequest());

  removeContactsApi(id)
    .then((idFromApi) => dispatch(removeContactsSuccess(idFromApi)))
    .catch((err) => dispatch(removeContactsError(err.message)));
};

// export const removeContactsApi = (id) => {
//   return axios
//     .delete(`contacts/${id}`)
//     .then(() => id)
//     .catch((err) => {
//       throw err;
//     });
// };
