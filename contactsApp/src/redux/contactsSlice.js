import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactsAdaptor = createEntityAdapter();

export const contactsSelectors = contactsAdaptor.getSelectors(
  (state) => state.contacts
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsAdaptor.getInitialState(),
  reducers: {
    addContact: contactsAdaptor.addOne,
    addContacts: contactsAdaptor.addMany,
    deleteContact: contactsAdaptor.removeOne,
    deleteAllContacts: contactsAdaptor.removeAll,
  },
});

export const { addContact, addContacts, deleteContact, deleteAllContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
