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

export const removeContacts = (id) => (dispatch) => {
  dispatch(removeContactsRequest());

  removeContactsApi(id)
    .then((idFromApi) => dispatch(removeContactsSuccess(idFromApi)))
    .catch((err) => dispatch(removeContactsError(err.message)));
};
