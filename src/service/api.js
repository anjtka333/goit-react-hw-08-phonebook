import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getContactsApi = () => {
  return axios
    .get(`http://localhost:4040/contacts`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const addContactApi = (contact) => {
  return axios
    .post(`http://localhost:4040/contacts`, contact)
    .then(() => ({ ...contact }))
    .catch((err) => {
      throw err;
    });
};

export const removeContactsApi = (id) => {
  return axios
    .delete("http://localhost:4040/contacts/" + id)
    .then(() => id)
    .catch((err) => {
      throw err;
    });
};
