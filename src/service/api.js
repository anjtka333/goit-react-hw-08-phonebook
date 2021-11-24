import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const getContactsApi = () => {
  return axios
    .get(`contacts`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const addContactApi = (contact) => {
  return axios
    .post(`contacts`, contact)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const removeContactsApi = (id) => {
  return axios
    .delete(`contacts/${id}`)
    .then(() => id)
    .catch((err) => {
      throw err;
    });
};
