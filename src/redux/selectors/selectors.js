import { createSelector } from "@reduxjs/toolkit";
export const getContactsFromState = (state) => state.contacts.items;
export const getFilterFromState = (state) => state.contacts.filter;
export const filteredContacts = createSelector(
  [getContactsFromState, getFilterFromState],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const getisLoading = (state) => state.loader;
export const getError = (state) => state.error;
