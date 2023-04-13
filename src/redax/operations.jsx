import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, addContact, deleteContact } from '../API/MockAPI';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAddContact',
  async (data, thunkAPI) => {
    try {
      const result = await addContact(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchDeleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
